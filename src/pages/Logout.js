import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import Loader from "../components/Loader";
import { UserContext } from "../context/User";
import { logout } from "../helpers";

export function Logout() {
    const { setAuth, auth } = useContext(UserContext);
    
    useEffect(() => {
      logout(setAuth)
    }, [])

    return auth ? <Loader /> : <Redirect to="/" />;
}