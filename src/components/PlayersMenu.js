import React, { useState, useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import PlayersList from "./PlayersList";
import { useHistory } from "react-router";

const PlayersMenu = () => {
  // state
  const [value, setValue] = useState("");

  // context
  const { players, addPlayers, createMatches } = useContext(PlayersContext);

  // redirect
  let history = useHistory();
  const redirect = () => {
    history.push("/matches");
  };

  //   add player
  const handleAdd = (e) => {
    e.preventDefault();
    let copy = value;
    copy && addPlayers(copy);
    setValue("");
  };

  //   handle enter
  const handleEnter = (e) => {
    if (e.charCode === 13 && e.target.value) {
      e.preventDefault();
      let copy = value;
      addPlayers(copy);
      setValue("");
    }
  };

  // handle start
  const handleStart = () => {
    if (players.length % 2 === 0) {
      createMatches(players);
      redirect();
    } else {
      alert("Players number should be even");
    }
  };

  return (
    <div className="container">
      <div
        className="card p-4 shadow-sm col-lg-6 mt-5"
        style={{ borderRadius: "20px" }}
      >
        <h5 className="mb-3">Add player</h5>
        <form onSubmit={handleAdd}>
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
              required
            />
            <button className="btn btn-dark" type="submit" id="button-addon2">
              Add
            </button>
          </div>
        </form>
      </div>
      {players.length !== 0 && <PlayersList players={players} />}
      {players.length > 3 && (
        <button className="btn btn-dark col-3 mb-5" onClick={handleStart}>
          Start
        </button>
      )}
    </div>
  );
};

export default PlayersMenu;
