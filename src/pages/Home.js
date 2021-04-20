import { useEffect } from "react"
import { useQuery } from "react-query"
import { fetchQuizzes } from "../api";
import QuizPreview from "../components/QuizPreview";

export default function Home() {
  const { data: quizzes, isLoading, isError } = useQuery('quizzes', fetchQuizzes);

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
