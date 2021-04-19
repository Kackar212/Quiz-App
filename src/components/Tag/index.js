import { Link } from "react-router-dom";

export default function Tag({ tag, last }) {
  return (
    <>
      <Link to={`/tag/${tag}`}>{tag}</Link>{ !last && ', ' }
    </>
  );
}