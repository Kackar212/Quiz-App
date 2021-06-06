import { useContext } from "react";
import { UserContext } from "../../context/User";
import { NavigationLink, NavigationList } from "./styles";

const NavigationLogout = (
  <li>
    <NavigationLink to="/wyloguj">Wyloguj</NavigationLink>
  </li>
)

export default function Navigation() {
  const { auth } = useContext(UserContext);

  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLink to="/">Strona główna</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/profil">Twój profil</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/dodaj-quiz">Dodaj quiz</NavigationLink>
        </li>
        { auth && NavigationLogout }
      </NavigationList>
    </nav>
  )
}
