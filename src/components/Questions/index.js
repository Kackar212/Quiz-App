import { generateKey } from "../../helpers"
import Question from "../Question"

export default function Questions({ questions }) {
    return questions.map(({ question, answers }, index) => <Question key={generateKey()} index={index} question={question} questionAnswers={answers}/>)
}
