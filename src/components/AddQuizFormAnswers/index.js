import { useState } from "react";
import CorrectAnswer from "../CorrectAnswer";
import { ReactComponent as TrashIcon } from '../../assets/trash-can.svg';
import Label from "../Label";
import Button from "../Button";
import { AnswerActions, AnswerInputContainer, AnswersGroup, AnswerInput, AnswerFormField, AddAnswerButton } from "./style";
import { isEmpty } from "../../helpers";

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

    const renderAnswer = (id, index) => (
        <AnswerInputContainer key={id * index}>
            <AnswerFormField 
                key={id + index} 
                errors={errors[index]}
                margin="0"

            >
                <AnswerInput
                    {...input(`answers[${index}]`)}
                    type="text" 
                    id={id}
                    border=""
                    aria-invalid={!isEmpty(errors[index])}
                />
                <Label htmlFor={id}>Odpowiedź</Label>
            </AnswerFormField>
            <AnswerActions>
                <CorrectAnswer 
                    id={id} 
                    errors={correctAnswer[index]} 
                    input={input} 
                    name={`correctAnswer[${index}]`}
                />
                <Button 
                    type="button"
                    onClick={removeAnswer(id, index)} 
                    disabled={answers.length <= 1}
                    srOnly="Usuń"
                >
                    <TrashIcon />
                </Button>
            </AnswerActions>
        </AnswerInputContainer>
    );

    return (
        <AnswersGroup>
            { answers.map(renderAnswer) }
            <AddAnswerButton type="button" full onClick={addAnswer}>
              Dodaj odpowiedź
            </AddAnswerButton>
        </AnswersGroup>
    );
}
