const matchGen = (players) => {
  // generate random number
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  // generate random Matches
  const generateMatches = (players) => {
    let matches = [];

    for (let i = 0; i < players.length / 2; i++) {
      let x = players[getRandom(0, players.length - 1)];
      let y = players[getRandom(0, players.length - 1)];
      let duplicate = matches.find(
        (match) =>
          match.player1 === x ||
          match.player2 === x ||
          match.player1 === y ||
          match.player2 === y
      );

      if (x !== y && !duplicate) {
        matches.push({ player1: x, player2: y });
      } else {
        i--;
      }
    }
    return matches;
  };
  //   final
  return generateMatches(players);
};

export default matchGen;
