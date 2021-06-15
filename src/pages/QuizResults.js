import { useQuery } from "react-query";
import { useParams, Redirect } from "react-router-dom";
import { authGet } from "../api";

export default function QuizResults() {
    const { id } = useParams();
    const { isLoading, data = [] } = useQuery(['getResults', id], ({ queryKey: [_, quizId] }) => {
        return authGet(`quizzes/${quizId}/results`);
    })
    
    if (data.statusCode === 404) {
        return <Redirect to='/' />
    }

    return data.map(({ userName, points }) =>
        <div style={{ padding: '30px' }}>
            <span>{userName}: </span>
            <span>{points}</span>
        </div>
    );
}