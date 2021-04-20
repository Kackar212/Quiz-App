import { useEffect } from "react"
import { useQuery } from "react-query"
import { fetchQuizzes } from "../api";

export default function Home() {
  const { data: quizzes, isLoading, isError } = useQuery('quizzes', fetchQuizzes);

  return <div>Strona główna</div>
}
