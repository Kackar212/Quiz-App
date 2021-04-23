import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/quiz/:quizId/:quizName">
          <Quiz />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profil">
          <Profile />
        </Route>
        <Route path="/dodaj-quiz">Dodaj quiz</Route>
        <Route>404</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
