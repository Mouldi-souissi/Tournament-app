import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import Match from "./Match";
import Score from "./Score";

const Matches = ({ matches }) => {
  const { calculateScore, players } = useContext(PlayersContext);
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Matches</h3>
      {matches.map((match, i) => (
        <Match key={i} match={match} />
      ))}
      <button
        className="btn btn-primary btn-lg mt-5 mb-5 float-end"
        onClick={calculateScore}
      >
        Save
      </button>
      <Score players={players} />
    </div>
  );
};

export default Matches;
