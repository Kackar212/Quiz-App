import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import QuizPage from "./pages/QuizPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AddQuiz from "./pages/AddQuiz";
import { UserContext } from "./context/User";
import { useAuth } from "./hooks";
import { Logout } from "./pages/Logout";
import QuizResults from "./pages/QuizResults";

function UserContextProvider({ children }) {
  const { user, auth, setUser, setAuth } = useAuth(localStorage.getItem('auth') === 'true');
  return (
    <UserContext.Provider value={{ user, auth, setUser, setAuth }}>
      {children}
    </UserContext.Provider>
  )
}

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Navigation />
        <main>
        <Switch>
          <Route path="/quiz/:quizId/:quizName">
            <QuizPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profil">
            <Profile />
          </Route>
          <Route path="/dodaj-quiz">
            <AddQuiz />
          </Route>
          <Route path="/wyloguj">
            <Logout />
          </Route>
          <Route path="/results/:id">
            <QuizResults />
          </Route>
          <Route>404</Route>
        </Switch> 
        </main>         
        <Footer />
        </UserContextProvider>
    </Router>

  );
}

export default App;
