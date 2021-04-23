import Question from "../Question"

export default function Questions({ questions = []}) {
    return questions.map(({ question, answers }, index) => <Question key={question + index} index={index} question={question} questionAnswers={answers}/>)
}
