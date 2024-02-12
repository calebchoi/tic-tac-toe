const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gameBoard = 
  [['-', '-', '-'],
   ['-', '-', '-'], 
   ['-', '-', '-']];

let gameEnded = false;
let winner;
let playerTurn = 'o';

const O_player = {
  r1: 0,
  r2: 0,
  r3: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  d1: 0,
  d2: 0,
}

const X_player = {
  r1: 0,
  r2: 0,
  r3: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  d1: 0,
  d2: 0,
}

const updateUserPlay = (player, x, y) => {
  player[`c${x}`] += 1;
  player[`r${y}`] += 1;

  if (x === y) {
    player['d1'] += 1;
    if (x === 2) {
      player['d2'] += 1;
    }
  } else if ((x === 1 && y === 3) || (x === 3 && y === 1)) {
    player['d2'] += 1;
  }

  for (let keys in player) {
    if (player[keys] === 3) {
      gameEnded = true;
      winner = player === O_player ? 'Player O' : 'Player X';
    }
  }
}

const promptUserInput = () => {
  rl.question('Play move (i.e. [1, 1] - [3, 3]): ', (play) => {
    const x = JSON.parse(play)[0];
    const y = JSON.parse(play)[1];
    if (playerTurn === 'o') {
      gameBoard[y-1][x-1] = 'o';
      playerTurn = 'x';
      updateUserPlay(O_player, x, y);
    } else {
      gameBoard[y-1][x-1] = 'x';
      playerTurn = 'o';
      updateUserPlay(X_player, x, y);
    }
    console.log(gameBoard[0]);
    console.log(gameBoard[1]);
    console.log(gameBoard[2]);

    // adding new comments
    if (!gameEnded) {
      promptUserInput();
    } else {
      console.log(winner + ' is the winner!');
      rl.close();
    }
  });
}

promptUserInput();
