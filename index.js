const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gameBoard = 
  [['-', '-', '-'],
   ['-', '-', '-'], 
   ['-', '-', '-']];

rl.question(JSON.stringify(gameBoard) + '\nPlay move (i.e. [1, 1] - [3, 3]): ', (answer) => {
  console.log(answer);

  rl.close();
});
