import React from "react";

const Score = ({ players }) => {
  return (
    <div className="container">
      {/* <h3 className="text-center" style={{ paddingTop: "100px" }}>
        Score table
      </h3> */}

      <table className="table ">
        <thead className="table-dark">
          <tr align="center">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">win</th>
            <th scope="col">loss</th>
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
    </div>
  );
};

export default Score;
