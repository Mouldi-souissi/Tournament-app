import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import Match from "./Match";
import { useHistory } from "react-router";

const Matches = () => {
  const { calculateScore, round, matches } = useContext(PlayersContext);
  let history = useHistory();
  const handleSave = () => {
    calculateScore();
    history.push("/score");
  };
  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center">Matches</h3>
      <h6 className="text-center mb-4">Round :{round}</h6>
      {matches.map((match, i) => (
        <Match key={i} match={match} />
      ))}
      <button
        className="btn btn-dark mt-5 mb-5 float-end col-3"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Matches;
