import { useState } from "react";
import AddQuizFormAnswers from "../AddQuizFormAnswers";
import Button from "../Button";
import Form from "../Form";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";

export default function AddQuizForm() {
  const [questionId, setQuestionId] = useState(1);

  return (
      <Form>
        <FormField>
          <Input type="text" />
          <Label>Podaj tytuł</Label>
        </FormField>
        <FormField>
          <Input type="text" />
          <Label>Podaj tagi(oddzieli je |, przykład: tag1|tag2)</Label>
        </FormField>
        <div>
          <FormField>
            <Input type="text" />
            <Label>Pytanie</Label>
          </FormField>
          <AddQuizFormAnswers questionId={questionId}/>
        </div>
        <Button>Zapisz pytanie</Button>
        <Button>Zapisz quiz</Button>
      </Form>
  );
}
