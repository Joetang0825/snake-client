//setup interface to handle user input from stdin
const setupInput = function () {
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
    process.stdout.write('up');
  }
  //detect keystroke 'd'
  if (key === '\u0064') {
    process.stdout.write('right');
  }
  //detect keystroke 's'
  if (key === '\u0073') {
    process.stdout.write('down');
  }
  //detect keystroke 'a'
  if (key === '\u0061') {
    process.stdout.write('left');
  }
};

module.exports = { setupInput };
