import React, { useContext, useEffect, useState } from "react";
import { PlayersContext } from "../context/PlayersContext";
import versus from "../assets/versus.png";
// import done from "../assets/done.png";

const Match = ({ match }) => {
  // state
  const [value, setValue] = useState("select");

  // context
  const { enterResult, round } = useContext(PlayersContext);

  // effect
  useEffect(() => {
    setValue("select");
  }, [round]);

  // functions
  const handleResult = (e) => {
    setValue(e.target.value);
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
      className={`card p-4 shadow-sm mb-3 ${match.result && "bg-light"}`}
      style={{ borderRadius: "30px" }}
    >
      <div className="mx-2  align-items-center">
        <div className="col-md-12 d-flex justify-content-between">
          <div className="text-primary">{match.player1?.name}</div>
          <div className="position-absolute start-50 translate-middle">
            <img src={versus} alt="vs" height="60px" className="pt-3" />
          </div>
          <div className="text-warning">{match.player2?.name}</div>
        </div>
        <hr />
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <div className="mr-3">winner </div>
          <select
            className="form-select h-50 w-50 "
            name="mode"
            value={value}
            onChange={handleResult}
          >
            <option value="select" disabled>
              Select result
            </option>
            <option value={match.player1?.name}>{match.player1?.name}</option>
            <option value={match.player2?.name}>{match.player2?.name}</option>
            <option value="draw">Draw</option>
          </select>
          {/* {match.result && <img src={done} alt="finished" height="30px" />} */}
        </div>
      </div>
    </div>
  );
};

export default Match;
