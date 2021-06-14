import { useQuery } from "react-query"
import { fetchQuizzes } from "../api";
import Loader from "../components/Loader";
import Message from "../components/Message";
import QuizPreview from "../components/QuizPreview";
import { isEmpty } from "../helpers";

export default function Home() {
  const { data: quizzes = [], isLoading } = useQuery('quizzes', fetchQuizzes);

  if (isLoading) return <Loader />

  const renderQuizzes = () => {
    if (isEmpty(quizzes)) {
      return <Message to="/dodaj-quiz" link="Dodaj quiz" message="Nie ma jeszcze żadnych quizów :("/>
    }

    return quizzes.map(({ id, user, name, categories, questions }) => (
      <QuizPreview id={id} user={user} numOfQuestions={questions.length} name={name} key={id} tags={categories}/>
    ))
  }

  return renderQuizzes();
}
