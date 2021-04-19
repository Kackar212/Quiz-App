import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">Strona główna</Route>
        <Route path="/profil">Twój profil</Route>
        <Route path="/dodaj-quiz">Dodaj quiz</Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}

export default App;
