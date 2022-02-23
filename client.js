const net = require("net");
// import constants
const { IP, PORT, NAME } = require('./constants');

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //connection has been made
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
  })

  //display data set from the server
  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  })

  //server has ended the connection
  conn.on('end', () => {
    console.log('disconnected from server');
  })

  return conn;
};

module.exports = { connect };
