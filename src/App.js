import "./App.css";
import Matches from "./components/Matches";
import PlayersMenu from "./components/PlayersMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/" component={PlayersMenu} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/score" component={Score} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
