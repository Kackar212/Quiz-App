import { generateKey } from "../../helpers";
import Answer from "../Answer";

export default function Answers({ answers, questionId }) {
    return answers.map((answer, index) => <Answer key={generateKey()} index={index} answer={answer} questionId={questionId}/> );
}