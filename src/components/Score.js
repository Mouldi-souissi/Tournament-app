import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";
import winner from "../assets/cup-winner.gif";

const Score = ({ players }) => {
  // context
  const { createMatches, handleRounds } = useContext(PlayersContext);
  // functions
  const handleNextRound = () => {
    createMatches();
    handleRounds();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      {/* <h3 className="text-center" style={{ paddingTop: "100px" }}>
        Score table
      </h3> */}

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

      <button
        className="btn btn-dark col-3 text-nowrap float-end mt-4 mb-5"
        onClick={handleNextRound}
      >
        Next Round
      </button>
    </div>
  );
};

export default Score;
