import { useEffect, useState } from "react";
import { isAuth } from "./helpers";

export const useAuth = () => {
    const [user, setUser] = useState({});
    const [auth, setAuth] = useState(false);
    
    const userAuth = async () => {
        if (auth !== await isAuth()) {
            setAuth(!auth);
        }
    }

    useEffect(() => {
      userAuth();
      setInterval(() => {
        userAuth();
      }, 2000);
    }, []);
  
    return { user, setUser, auth, setAuth };
}
