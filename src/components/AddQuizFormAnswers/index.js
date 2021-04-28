import { useState } from "react";
import CorrectAnswer from "../CorrectAnswer";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

export default function AddQuizFormAnswers() {
    let [answers, setAnswers] = useState([1]);

    const removeAnswer = (id) => () => setAnswers(answers.filter(answer => answer !== id));
    const addAnswer = () => setAnswers([...answers, answers.pop() + 1]);

    return (
        <div role="radiogroup" id="answers" name="answers">
            {answers.map((id) => 
                <FormField key={id}>
                    <Input type="text" id={id}/>
                    <Label htmlFor={id}>Odpowiedź</Label>
                    <CorrectAnswer id={id}/>
                    <Button type="button" onClick={removeAnswer(id)}>
                      Usuń
                    </Button>
                </FormField>
            )}

            <Button type="button" onClick={addAnswer}>
              Dodaj odpowiedź
            </Button>
        </div>
    );
}
