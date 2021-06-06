import { createContext } from "react";

const UserContext = createContext({
    user: {},
    auth: false,
    setAuth: () => {},
    setUser: () => {},
});

export { UserContext };
