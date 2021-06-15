import { useQuery } from "react-query";
import { useParams, Redirect } from "react-router";
import { fetchQuiz } from "../api";
import Loader from "../components/Loader";
import Quiz from "../components/Quiz";

export default function QuizPage() {
    const { quizId } = useParams();

    const { data, isLoading } = useQuery(['quiz', quizId], fetchQuiz);
    const { name, questions = [], id, categories = [] } = data || {};

    if (data.statusCode === 404) {
        return <Redirect to='/' />
    }

    return isLoading ? <Loader /> : <Quiz id={id} name={name} questions={questions} tags={categories}/>
}
