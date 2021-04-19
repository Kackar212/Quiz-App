import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/profil">Twój profil</Link>
        </li>
        <li>
          <Link to="/dodaj-quiz">Dodaj quiz</Link>
        </li>
      </ul>
    </nav>
  )
}