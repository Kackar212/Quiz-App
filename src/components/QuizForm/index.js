import { useEffect } from "react";
import { useQuery } from "react-query";
import { hasErrors } from "../../helpers";
import Button from "../Button";
import Form from "../Form";
import Questions from "../Questions";

export default function QuizForm({ onSubmit, questions, dummy = false, setQuiz, formState, data, isLoading }) {
    useEffect(() => {
        const lastQuestion = questions[questions.length - 1];
        if (dummy && lastQuestion) {
            formState.setValues(
                ({ answers } = { answers: [] }) => (
                    { answers: [...answers, lastQuestion.answers.map(() => false)] }
                )
            )
        }
    }, [questions]);

    if (formState.errors === undefined) return null;

    return (
        formState.errors.length === questions.length && (
        <Form onSubmit={onSubmit}>
            <Questions data={data} dummy={dummy} questions={questions} setQuiz={setQuiz} formState={formState}/>
            { !dummy && <Button type="submit" isLoading={isLoading} disabled={hasErrors(formState.errors)}>Sprawdź odpowiedzi</Button> }
        </Form>
    ))
}
