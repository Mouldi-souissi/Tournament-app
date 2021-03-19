import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const Match = ({ match }) => {
  // context
  const { enterResult } = useContext(PlayersContext);

  // functions
  const handleResult = (e) => {
    let result = "";
    if (e.target.value === "draw") {
      result = { winner: "", looser: "", draw: true };
    } else {
      result = {
        winner:
          e.target.value === match.player1.name ? match.player1 : match.player2,
        looser:
          e.target.value === match.player1.name ? match.player2 : match.player1,
        draw: false,
      };
    }
    enterResult(match, result);
  };

  return (
    <div
      className={`card p-4 shadow-sm mb-2 ${match.result && "bg-light"}`}
      style={{ borderRadius: "30px" }}
    >
      <div className="mx-2  align-items-center">
        <div className="col-md-12 d-flex justify-content-between">
          <div className="text-primary">{match.player1?.name}</div>
          <div className="position-absolute start-50">VS</div>
          <div className="text-danger">{match.player2?.name}</div>
        </div>
        <hr />
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <div className="mr-3">winner </div>
          <select
            className="form-select h-50 w-50 "
            name="mode"
            defaultValue="draw"
            onChange={handleResult}
          >
            <option className="text-primary" value={match.player1?.name}>
              {match.player1?.name}
            </option>
            <option className="text-danger" value={match.player2?.name}>
              {match.player2?.name}
            </option>
            <option value="draw">Draw</option>
          </select>
        </div>
      </div>
      {/* <div className="mt-2 text-center" style={{ fontSize: "15px" }}>
        {match.result &&
          `${
            match.result.winner === "draw"
              ? "Draw"
              : `The winner is ${match.result.winner}`
          }`}
      </div> */}
    </div>
  );
};

export default Match;
