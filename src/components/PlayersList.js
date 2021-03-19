import React from "react";

const PlayersList = ({ players }) => {
  return (
    <div className="mt-5">
      <h5>Players list</h5>
      <ol>
        {players.map((player, i) => (
          <li key={i}>{player.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default PlayersList;
