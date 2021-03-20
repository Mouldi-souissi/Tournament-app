import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import winner from "../assets/cup-winner.gif";
import { useHistory } from "react-router";

const Score = () => {
  // context
  const { createMatches, handleRounds, players, round } = useContext(
    PlayersContext
  );

  // history
  let history = useHistory();

  // functions
  const handleNextRound = () => {
    createMatches();
    handleRounds();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    history.push("/matches");
  };

  return (
    <div className="container">
      <h3 className="text-center pt-5 pb-3">Score table</h3>

      <table className="table">
        <thead className="table-dark align-middle">
          <tr align="center" style={{ fontSize: "18px" }}>
            <th scope="col">
              <img src={winner} alt="cup" height="60px" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Win</th>
            <th scope="col">Loss</th>
            <th scope="col">Draw</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {players
            .sort((a, b) => b.pts - a.pts)
            .map((player, i) => (
              <tr key={i} align="center">
                <th scope="row">{i + 1}</th>
                <td>{player.name}</td>
                <td className="text-success">{player.win}</td>
                <td className="text-danger">{player.loss}</td>
                <td className="text-warning">{player.draw}</td>
                <td>{player.pts}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-dark col-3 mt-4 mb-5"
          onClick={handleNextRound}
        >
          Start Round {round + 1}
        </button>
      </div>
    </div>
  );
};

export default Score;
