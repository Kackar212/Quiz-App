import Answer from "../Answer";

export default function Answers({ answers, questionId, formState, checkAnswersResult = [undefined, []] }) {
    const [result, correctAnswers] = checkAnswersResult;
    return answers.map((answer, index) => (
        <Answer
            key={questionId + '-' + index}
            correctAnswers={correctAnswers}
            formState={formState}
            result={result}
            index={index}
            answer={answer}
            questionId={questionId}
        /> 
    ));
}
