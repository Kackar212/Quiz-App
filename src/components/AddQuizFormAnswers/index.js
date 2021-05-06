import { useState } from "react";
import CorrectAnswer from "../CorrectAnswer";
import FormField from "../FormField";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

export default function AddQuizFormAnswers({ input, setValues, errors: [errors, correctAnswer] }) {
    let [answers, setAnswers] = useState([1]);

    const removeAnswer = (id, index) => () => {
        setValues(prevValues => {
            const { answers, correctAnswer } = prevValues;
            
            return {
                ...prevValues,
                answers: answers.filter((_, i) => i !== index),
                correctAnswer: correctAnswer.filter((_, i) => i !== index),
            };
        });

        setAnswers((prevAnswers) => {
            return prevAnswers.filter(answer => answer !== id)
        });
    }

    const addAnswer = () => setAnswers(prevState => {
        setValues(
            prevValues => (
                {
                    ...prevValues, 
                    answers: [...prevValues.answers, ""],
                    correctAnswer: [...prevValues.correctAnswer, false],
                }
            )
        );
        return [...prevState, (prevState[prevState.length - 1] || 0) + 1]
    });

    return (
        <div role="radiogroup" id="answers" name="answers">
            {answers.map((id, index) => 
                <FormField key={id + index} errors={errors[index]}>
                    <Input {...input(`answers[${index}]`)} type="text" id={id}/>
                    <Label htmlFor={id}>Odpowiedź</Label>
                    <CorrectAnswer id={id} errors={correctAnswer[index]} input={input} name={`correctAnswer[${index}]`}/>
                    <Button type="button" onClick={removeAnswer(id, index)} disabled={answers.length <= 1}>
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
