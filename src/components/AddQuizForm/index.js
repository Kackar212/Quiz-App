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

const schema = validateSchema
  .add(['title', 'question', 'answers', 'correctAnswer'], {
    required: true,
  })
  .add(['correctAnswer'], {
    one: true
  })
  .add(['question', 'title', 'answers'], {
    maxLength: 80,
  });

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
            <Label>Podaj tytuł</Label>
          </FormField>
          <FormField errors={tags}>
            <Input {...input('tags')} type="text" />
            <Label>Podaj tagi(oddzieli je |, przykład: tag1|tag2)</Label>
          </FormField>
          <div>
            <FormField errors={question}>
              <Input {...input('question')} type="text" />
              <Label>Pytanie</Label>
            </FormField>
            <AddQuizFormAnswers 
              questionId={questionId} 
              errors={[answers, correctAnswer]} 
              input={input}
              setValues={setValues}
            />
          </div>
          <Button type="button" disabled={hasErrors(question, answers, correctAnswer)}>Zapisz pytanie</Button>
          <Button type="submit" disabled={!isValid}>Zapisz quiz</Button>
        </Form>
      }
    />
  );
}
