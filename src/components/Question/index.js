import Answers from "../Answers";
import Button from "../Button";
import { StyledQuestion } from "./style";

export default function Question({ question, id, setQuiz, questionAnswers, index, formState, dummy, data }) {
    function removeQuestion() {
        setQuiz(quiz => {
            const questions = [...quiz.questions];

            questions.splice(index, 1);

            return { ...quiz, questions };
        })
    }

    return (
        <StyledQuestion isCorrectQuestion={data[0]}>
            <p>{index + 1}. {question}</p>
            <Answers answers={questionAnswers} questionId={index} formState={formState} checkAnswersResult={data} id={id}/>
            { dummy && <Button onClick={removeQuestion} type="button">Usuń pytanie</Button> }
        </StyledQuestion>
    );
}
