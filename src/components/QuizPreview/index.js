import { Link } from "react-router-dom";
import Tags from "../Tags";

export default function QuizPreview({ name, tags = [], id, user }) {
  return (
    <div>
      <div>
        <Link to={`/quiz/${id}`}>{ name }</Link>
      </div>
      <div>
        <Tags tags={tags} />
        <div>
          Autor: <Link to={`/uzytkownicy/${user.name}`}>{ user.name }</Link>
        </div>
      </div>
    </div>
  );
}
