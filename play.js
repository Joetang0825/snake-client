// import client.js and input.js
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log("Connecting ...");
// make a connection to the server
let conn = connect();
// pass the connection object to setupInput
setupInput(conn);