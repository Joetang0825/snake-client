// import constants
const { MOVE_UP_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MESSAGE } = require('./constants');


// Stores the active TCP connection object.
let connection;

//setup interface to handle user input from stdin
const setupInput = (conn) => {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


//function to receive input from user
const handleUserInput = function (key) {

  //detect keystroke 'ctrl+C' to exit
  if (key === '\u0003') {
    process.exit();
  }
  //detect keystroke 'w' to move up
  if (key === '\u0077') {
    connection.write(MOVE_UP_KEY);
  }
  //detect keystroke 'd' to move right
  if (key === '\u0064') {
    connection.write(MOVE_RIGHT_KEY);
  }
  //detect keystroke 's' to move down
  if (key === '\u0073') {
    connection.write(MOVE_DOWN_KEY);
  }
  //detect keystroke 'a' to move left
  if (key === '\u0061') {
    connection.write(MOVE_LEFT_KEY);
  }
  //detect keystroke 'm' to send message "Hello everyone"
  if (key === '\u006D') {
    connection.write(MESSAGE['m']);
  }
  //detect keystroke 'y' to send message "Yeah"
  if (key === '\u0079') {
    connection.write(MESSAGE['y']);
  }
};

module.exports = { setupInput };
