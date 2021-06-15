import { useContext, useState } from "react";
import { UserContext } from "../../context/User";
import { logout } from "../../helpers";
import Loader from "../Loader";
import { NavigationLink, NavigationList } from "./styles";
const NavigationLogout = ({setAuth}) => {
  const [isLoading, setIsLoading] = useState(false);
  return <li>
    <NavigationLink style={{position: 'relative'}} to="/wyloguj" onClick={async (e) => {
      e.preventDefault();
      setIsLoading(true);
      await logout(setAuth);
      setIsLoading(false);
    }}>{isLoading && <Loader scale={0.5} position='right'/>} Wyloguj</NavigationLink>
  </li>
}
export default function Navigation() {
  const { setAuth, auth } = useContext(UserContext);

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
        { auth && <NavigationLogout setAuth={setAuth}/> }
      </NavigationList>
    </nav>
  )
}
