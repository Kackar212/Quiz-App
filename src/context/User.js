import { createContext } from "react";

const auth = localStorage.getItem('auth') === 'true';

const UserContext = createContext({
    user: {},
    auth,
    setAuth: () => {},
    setUser: () => {},
});

export { UserContext };
