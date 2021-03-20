import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import Match from "./Match";
import Score from "./Score";

const Matches = ({ matches }) => {
  const { calculateScore, players, round } = useContext(PlayersContext);
  return (
    <div className="container mt-5">
      <h3 className="text-center">Matches</h3>
      <h6 className="text-center mb-4">Round :{round}</h6>
      {matches.map((match, i) => (
        <Match key={i} match={match} />
      ))}
      <button
        className="btn btn-dark mt-5 mb-5 float-end col-3"
        onClick={calculateScore}
      >
        Save
      </button>
      <Score players={players} />
    </div>
  );
};

export default Matches;
