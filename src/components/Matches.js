import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import Match from "./Match";
import { useHistory } from "react-router";

const Matches = () => {
  const { calculateScore, round, matches } = useContext(PlayersContext);
  let history = useHistory();
  const handleSave = () => {
    if (matches.filter((el) => el.result).length === matches.length) {
      calculateScore();
      history.push("/score");
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      alert("Results are missing");
    }
  };
  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center">Matches</h3>
      <h6 className="text-center mb-4">Round :{round}</h6>
      {matches.map((match, i) => (
        <Match key={i} match={match} />
      ))}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark mt-5 mb-5 col-3" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Matches;
