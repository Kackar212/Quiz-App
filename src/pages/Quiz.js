import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchQuiz } from "../api";
import Questions from "../components/Questions";
import Tags from "../components/Tags";

export default function Quiz() {
    const { quizId } = useParams();

    const { data } = useQuery(['quiz', quizId], fetchQuiz);
    const { name, questions = [], id, tags = [] } = data || {};

    return (
        <div>
           <p>{name}</p>
            <Tags tags={tags}/>           
            <form data-id={id}>
                <Questions questions={questions} />
                <button type="submit">Sprawdź odpowiedzi</button>
            </form>
        </div>
    )
}
