import Answer from "../Answer";

export default function Answers({ answers, questionId }) {
    return answers.map((answer, index) => <Answer key={answer + index} index={index} answer={answer} questionId={questionId}/> );
}
