import { useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { authGet, authUser, createUser, deleteQuiz } from "../api";
import AuthForm from "../components/AuthForm";
import QuizPreview from "../components/QuizPreview";
import { UserContext } from "../context/User";
import Loader from "../components/Loader";
import { createCookie, isEmpty } from "../helpers";
import Message from "../components/Message";

export default function Profile() {
  const { setUser, auth, setAuth } = useContext(UserContext);
  const { data = [], isLoading, refetch } = useQuery('getUserQuizzes', async () => {
    return authGet('users/quizzes');
  });
  const { mutateAsync, isLoading: removeQuizIsLoading, data: deletedQuizData = {} } = useMutation('removeQuiz', deleteQuiz);
  const history = useHistory();

  if (!auth) {
    return (
      <>
        <AuthForm
          title="Zarejestruj się"
          successMessage='Pomyślnie stworzyłeś konto!'
          apiFunction={createUser}
        />
        <AuthForm 
          title="Zaloguj się"
          successMessage='Pomyślnie się zalogowałeś!'
          apiFunction={authUser}
          afterRequest={({ name, id } = {}) => {
            setUser({ name, id });
            createCookie('user', { name, id }, { 'max-age': 1200, path: '/' });
            setAuth(true);
            localStorage.setItem('auth', true);
            history.goBack();
          }}
        />
      </>
    );
  }

  let quizzes = Array.isArray(data) ? data : [];
  quizzes = quizzes.filter(({ id }) => deletedQuizData.id !== id);

  const renderQuizPreview = ({ id, user, name, categories, questions }) => (<>
    <QuizPreview
      id={id}
      tags={categories}
      user={user}
      name={name}
      key={id}
      numOfQuestions={questions.length}
      removeQuiz={mutateAsync}
      removedId={deletedQuizData.id}
      isLoading={removeQuizIsLoading}
      getUserQuizzes={refetch}
    />
    <Link style={{ display: 'block', textAlign: 'center' }} to={`/results/${id}`}>Zobacz rozwiązania twojego quizu przez innych użytkowników</Link>
  </>);

  if (isEmpty(quizzes)) {
    return <Message to="/dodaj-quiz" link="Dodaj quiz" message="Nie masz jeszcze żadnych quizów :("/>
  }

  return !isLoading ? quizzes.map(renderQuizPreview) : <Loader />;
}
