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
  //detect keystroke 'ctrl+C'
  if (key === '\u0003') {
    process.exit();
  }
  //detect keystroke 'w'
  if (key === '\u0077') {
    connection.write('Move: up');
  }
  //detect keystroke 'd'
  if (key === '\u0064') {
    connection.write('Move: right');
  }
  //detect keystroke 's'
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  //detect keystroke 'a'
  if (key === '\u0061') {
    connection.write('Move: left');
  }
};

module.exports = { setupInput };
