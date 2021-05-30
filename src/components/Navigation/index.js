import { NavigationLink, NavigationList } from "./styles";

export default function Navigation() {
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
      </NavigationList>
    </nav>
  )
}
