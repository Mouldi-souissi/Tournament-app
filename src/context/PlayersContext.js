import React, { createContext, useState, useEffect } from "react";
import matchGen from "../functions/matchGen";

export const PlayersContext = createContext();

const PlayersContextProvider = (props) => {
  // state
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  let [round, setRound] = useState(1);

  // effect load from local storage
  useEffect(() => {
    const json = localStorage.getItem("tournament");
    const savedPlayers = JSON.parse(json)?.players;
    const savedMatches = JSON.parse(json)?.matches;
    const savedRound = JSON.parse(json)?.round;
    if (savedPlayers) {
      setPlayers(savedPlayers);
    }
    if (savedMatches) {
      setMatches(savedMatches);
    }
    if (savedRound) {
      setRound(savedRound);
    }
  }, []);

  // effect save to local storage
  useEffect(() => {
    const json = JSON.stringify({ players, matches, round });
    localStorage.setItem("tournament", json);
  }, [players, matches, round]);

  // add players
  const addPlayers = (player) => {
    setPlayers([
      ...players,
      { name: player, loss: 0, win: 0, draw: 0, pts: 0 },
    ]);
  };

  // delete player
  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player !== players[id]));
  };

  // edit player
  const editPlayer = (id, edit) => {
    setPlayers(
      players.map((player) =>
        player === players[id] ? { ...player, name: edit } : player
      )
    );
  };

  //   gen matches
  const createMatches = () => {
    setMatches(matchGen(players));
  };

  // handle results of matches
  const enterResult = (match, result) => {
    setMatches(matches.map((el) => (el === match ? { ...el, result } : el)));
  };

  // calculate score for each player
  const calculateScore = () => {
    let copy = [];
    for (let i = 0; i < matches.length; i++) {
      for (let j = 0; j < players.length; j++) {
        if (
          matches[i].result.winner.name === players[j].name &&
          matches[i].result.draw === false
        ) {
          copy = [
            ...copy,
            {
              ...matches[i].result.winner,
              win: matches[i].result.winner.win + 1,
              pts: matches[i].result.winner.pts + 3,
            },
            {
              ...matches[i].result.looser,
              loss: matches[i].result.looser.loss + 1,
            },
          ];
        }
        if (
          matches[i].player1.name === players[j].name &&
          matches[i].result.draw === true
        ) {
          copy = [
            ...copy,
            {
              ...matches[i].player1,
              draw: matches[i].player1.draw + 1,
              pts: matches[i].player1.pts + 1,
            },
            {
              ...matches[i].player2,
              draw: matches[i].player2.draw + 1,
              pts: matches[i].player2.pts + 1,
            },
          ];
        }
      }
    }
    setPlayers(copy);
  };

  // handle rounds
  const handleRounds = () => {
    setRound((round = round + 1));
  };
  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayers,
        createMatches,
        matches,
        enterResult,
        calculateScore,
        round,
        handleRounds,
        deletePlayer,
        editPlayer,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export default PlayersContextProvider;
