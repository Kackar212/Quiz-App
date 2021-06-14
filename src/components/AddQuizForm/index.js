import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { createQuiz } from "../../api";
import { UserContext } from "../../context/User";
import { hasErrors, isEmpty } from "../../helpers";
import { validateSchema } from "../../Validator/index";
import AddQuizFormAnswers from "../AddQuizFormAnswers";
import Button from "../Button";
import EasyForm from "../EasyForm";
import Form from "../Form";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";
import Quiz from "../Quiz";
import { QuestionContainer } from "./style";

const schema = validateSchema.create()
  .add(['title', 'question', 'answers', 'correctAnswer', 'tags'], {
    required: true,
  })
  .add(['correctAnswer'], {
    one: true
  })
  .add(['question', 'title', 'answers'], {
    maxLength: 80,
    minLength: 3,
  });

export default function AddQuizForm() {
  const { auth, setAuth } = useContext(UserContext);

  const [quiz, setQuiz] = useState({
    name: '',
    categories: [''],
    questions: [],
  });
  const { mutateAsync, isLoading, data = {} } = useMutation(createQuiz);
  const initialValues = {
    title: "",
    tags: "",
    question: "",
    answers: [""],
    correctAnswer: [true]
  };

  function saveQuizData({ categories, name }) {
      setQuiz({ ...quiz, name, categories });
  }

  function saveQuestion({ question }, setValues) {
    return () => {
      const questions = [...quiz.questions, question];
      setValues(prevValues => {
        const { answers } = prevValues;
        return { 
          ...prevValues, 
          question: "", 
          answers: answers.map(() => ""),
          correctAnswer: answers.map(() => [true]),
        };
      });
      
      setQuiz({ ...quiz, questions });
    }
  }

  async function saveQuiz({ setValues, values }) {
    const { statusCode } = await mutateAsync(quiz);
    if (statusCode === 401) setAuth(false);
    if (statusCode === 201) {
      setQuiz({
        name: '',
        categories: [''],
        questions: [],
      });
      setValues(initialValues);
    }
  }

  function mapFormValues({ answers, correctAnswer, tags, question, title }) {
    const mappedAnswers = answers.map((answer, index) => ({
      answer,
      correctAnswer: correctAnswer[index],
    }));

    return {
      name: title,
      categories: tags.split("|").filter(Boolean),
      question: {
        answers: mappedAnswers,
        question,
      }
    }
  }

  return (
    <>
    <EasyForm
      schema={schema}
      initialValues={initialValues}
      mapValues={mapFormValues}
      onSubmit={saveQuiz}
      render={({ 
        onSubmit,
        input,
        setValues,
        mappedValues,
        errors: { title, tags, question, answers, correctAnswer },
      }) => 
        <Form
          onSubmit={onSubmit}
          isSuccess={data.statusCode === 201}
          errorMessage={data.error || data.message}
          successMessage={<div>Pomyślne dodałeś <a href={`quiz/${data.id}/${data.name}`}>quiz</a></div>}
        >
          { !auth && <p>Musisz się zalogować żeby móc dodać quiz! <Link to='/profil'>Zaloguj się</Link></p> }
          <FormField errors={title}>
            <Input 
              {...input('title', saveQuizData)}
              type="text"
            />
            <Label htmlFor="title">Podaj tytuł</Label>
          </FormField>
          <FormField errors={tags}>
            <Input 
              {...input('tags', saveQuizData)}
              type="text" 
            />
            <Label htmlFor="tags">Podaj tagi odzielonne za pomocą |</Label>
          </FormField>
          <QuestionContainer>
            <FormField errors={question}>
              <Input {...input('question')} type="text" />
              <Label htmlFor="question">Pytanie</Label>
            </FormField>
            <AddQuizFormAnswers 
              questionId={0}
              errors={[answers, correctAnswer]} 
              input={input}
              setValues={setValues}
            />
          </QuestionContainer>
          <Button
            type="button"
            full
            onClick={saveQuestion(mappedValues, setValues)}
            disabled={hasErrors(question, answers, correctAnswer)}
          >Zapisz pytanie</Button>
          <Button 
            type="submit"
            full 
            isLoading={isLoading} 
            disabled={isEmpty(quiz.questions) || hasErrors(tags, title) || !auth}>
            Zapisz quiz
          </Button>
        </Form>
      }
    />
    <Quiz
      tags={quiz.categories.map(category => ({ category }))}
      name={quiz.name}
      questions={quiz.questions}
      setQuiz={setQuiz}
      dummy={true}
    />
    </>
  );
}
