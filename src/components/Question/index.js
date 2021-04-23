import Answers from "../Answers";

export default function Question({ question, questionAnswers, id, index }) {
    return (
        <div>
            <p>{index + 1}. {question}</p>
            <Answers answers={questionAnswers} questionId={id}/>
        </div>
    );
}