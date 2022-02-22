const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //connection has been made
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YKK");
  })

  //setTimeout(() => { conn.write("Move: up") }, 2000);
  //setTimeout(() => { conn.write("Move: left") }, 4000);
  //setInterval(() => { conn.write("Move: up") }, 50)

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
