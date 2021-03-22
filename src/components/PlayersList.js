import React from "react";
import Player from "./Player";

const PlayersList = ({ players }) => {
  return (
    <div className="mt-5 col-lg-6">
      <h5>Players list</h5>
      <ol>
        {players.map((player, i) => (
          <Player key={i} id={i} player={player} />
        ))}
      </ol>
    </div>
  );
};

export default PlayersList;
