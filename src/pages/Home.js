import { useQuery, useQueryClient } from "react-query"
import { fetchQuizzes } from "../api";
import Loader from "../components/Loader";
import QuizPreview from "../components/QuizPreview";

export default function Home() {
  const { data: quizzes = [], isFetching, isLoading } = useQuery('quizzes', fetchQuizzes);

  if (isLoading) return <Loader />
  
  return (
    <div>
      { 
        quizzes.map (
          ({ id, user, name }) => <QuizPreview id={id} user={user} name={name}/>
        )
      }
    </div>
  )
}
