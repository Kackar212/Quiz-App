import { useEffect, useState } from "react";
import { isAuth } from "./helpers";

export const useAuth = (initialValue = false) => {
    const [user, setUser] = useState({});
    const [auth, setAuth] = useState(initialValue);

    const userAuth = async () => {
      const isUserAuth = await isAuth(setUser);
      localStorage.setItem('auth', isUserAuth);
      if (!isUserAuth) setUser({});

      setAuth((prevAuth) => {
        if (prevAuth !== isUserAuth) {
          return !prevAuth;
        }

        return prevAuth;
      });
    }

    useEffect(() => {
      userAuth();
      setInterval(async () => {
        await userAuth();
      }, 5000);
    }, []);
  
    return { user, setUser, auth, setAuth };
}
