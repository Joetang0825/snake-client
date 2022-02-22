const { connect } = require('./client');

console.log("Connecting ...");
let conn = connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u001B\u005B\u0041') {
    process.stdout.write('up');
  }
  if (key === '\u001B\u005B\u0043') {
    process.stdout.write('right');
  }
  if (key === '\u001B\u005B\u0042') {
    process.stdout.write('down');
  }
  if (key === '\u001B\u005B\u0044') {
    process.stdout.write('left');
  }
};


setupInput();