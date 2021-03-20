import React, { useState, useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import PlayersList from "./PlayersList";

const PlayersMenu = () => {
  // state
  const [value, setValue] = useState("");
  // context
  const { players, addPlayers, createMatches } = useContext(PlayersContext);
  //   add player
  const handleAdd = () => {
    let copy = value;
    addPlayers(copy);
    setValue("");
  };
  //   handle enter
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      let copy = value;
      addPlayers(copy);
      setValue("");
    }
  };
  return (
    <div className="container">
      <div
        className="card p-4 shadow-sm col-lg-6 mt-5"
        style={{ borderRadius: "20px" }}
      >
        <h5 className="mb-3">Add player</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleEnter}
          />
          <button
            className="btn btn-dark"
            type="button"
            id="button-addon2"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
      {players.length !== 0 && <PlayersList players={players} />}
      {players.length > 3 && (
        <button
          className="btn btn-dark col-3 mb-5"
          onClick={() => createMatches(players)}
        >
          Start
        </button>
      )}
    </div>
  );
};

export default PlayersMenu;
