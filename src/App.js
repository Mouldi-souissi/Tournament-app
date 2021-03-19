import "./App.css";
import Matches from "./components/Matches";
import PlayersMenu from "./components/PlayersMenu";
import { PlayersContext } from "./context/PlayersContext";
import { useContext } from "react";
import winner from "./assets/winner.png";

function App() {
  const { matches } = useContext(PlayersContext);
  return (
    <div className="App">
      <div className="container">
        <div className="pt-5 d-flex">
          <img src={winner} alt="logo" height="60px" />
          <header className="display-4 text-primary">Tournament</header>
        </div>

        {matches.length !== 0 ? <Matches matches={matches} /> : <PlayersMenu />}
      </div>
    </div>
  );
}

export default App;
