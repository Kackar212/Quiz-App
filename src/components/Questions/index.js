import Question from "../Question"

export default function Questions({ questions = [], setQuiz, formState, dummy, data }) {
    return questions.map(({ question, answers, id }, index) => 
        <Question 
            key={question + index}
            index={index}
            question={question}
            questionAnswers={answers}
            formState={formState}
            setQuiz={setQuiz}
            dummy={dummy}
            data={data[id] || []}
            id={id}
        />
    )
}
