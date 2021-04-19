import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">Strona główna</Route>
        <Route path="/profil">Twój profil</Route>
        <Route path="/dodaj-quiz">Dodaj quiz</Route>
        <Route>404</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
