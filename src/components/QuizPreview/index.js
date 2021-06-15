import Tags from "../Tags";
import Button from "../Button";
import { ReactComponent as TrashIcon } from "../../assets/trash-can.svg";
import { MetaDataContainer, QuizTitle, AuthorLink, QuizPreviewContainer, NumberOfQuestions } from "./style";

export default function QuizPreview({ name, tags = [], id, user, getUserQuizzes, numOfQuestions, removeQuiz, isLoading, removedId }) {
  if (removedId === id) return null;
  return (
    <QuizPreviewContainer>
      <div>
        <QuizTitle to={`/quiz/${id}/${name}`}>{ name }</QuizTitle>
        <NumberOfQuestions>{numOfQuestions}</NumberOfQuestions>
      </div>
      <MetaDataContainer>
        <Tags tags={tags} />
        <AuthorLink to={`/uzytkownicy/${user.name}`}>{ user.name }</AuthorLink>
        {removeQuiz && (
          <Button 
            type="button"
            onClick={async () => {
              await removeQuiz(id);
              getUserQuizzes();
            }} 
            srOnly="Usuń"
            isLoading={isLoading}
          >
            <TrashIcon />
          </Button>
        )}
      </MetaDataContainer>
    </QuizPreviewContainer>
  );
}
