import { useState } from "react";
import { hasErrors } from "../../helpers";
import { validateSchema } from "../../Validator/index";
import AddQuizFormAnswers from "../AddQuizFormAnswers";
import Button from "../Button";
import EasyForm from "../EasyForm";
import Form from "../Form";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";
import { QuestionContainer } from "./style";

const schema = validateSchema
  .add(['title', 'question', 'answers', 'correctAnswer'], {
    required: true,
  })
  .add(['correctAnswer'], {
    one: true
  })
  .add(['question', 'title', 'answers'], {
    maxLength: 80,
    minLength: 3,
  });

const onHover = {
  background: '#52d250',
}

export default function AddQuizForm() {
  const [questionId, setQuestionId] = useState(1);

  return (
    <EasyForm
      schema={schema}
      initialValues={{
        title: "",
        tags: "",
        question: "",
        answers: [""],
        correctAnswer: [true]
      }}
      render={({ input, setValues, errors: { title, tags, question, answers, correctAnswer }, isValid }) => 
        <Form>
          <FormField errors={title}>
            <Input {...input('title')} type="text" />
            <Label htmlFor="title">Podaj tytuł</Label>
          </FormField>
          <FormField errors={tags}>
            <Input {...input('tags')} type="text" />
            <Label htmlFor="tags">Podaj tagi odzielonne za pomocą |</Label>
          </FormField>
          <QuestionContainer>
            <FormField errors={question}>
              <Input {...input('question')} type="text" />
              <Label htmlFor="question">Pytanie</Label>
            </FormField>
            <AddQuizFormAnswers 
              questionId={questionId} 
              errors={[answers, correctAnswer]} 
              input={input}
              setValues={setValues}
            />
          </QuestionContainer>
          <Button
            type="button"
            full
            disabled={hasErrors(question, answers, correctAnswer)}
          >Zapisz pytanie</Button>
          <Button type="submit" full disabled={!isValid}>Zapisz quiz</Button>
        </Form>
      }
    />
  );
}
