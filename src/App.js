import "./App.css";
import Matches from "./components/Matches";
import PlayersMenu from "./components/PlayersMenu";
import { PlayersContext } from "./context/PlayersContext";
import { useContext } from "react";
import winner from "./assets/cup.png";

function App() {
  const { matches } = useContext(PlayersContext);
  return (
    <div className="App">
      <div className="pt-5 pb-5 d-flex bg-dark justify-content-center">
        <img src={winner} alt="logo" height="80px" />
        <header className="display-4 text-white">Tournament</header>
      </div>
      <div className="container-fluid mb-5">
        {matches.length !== 0 ? <Matches matches={matches} /> : <PlayersMenu />}
      </div>
    </div>
  );
}

export default App;
