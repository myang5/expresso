const http = require('http');

const htcpcpServer = module.exports = {}

htcpcpServer.createServer = function() {
  //Node.js docs: "The requestListener is a function which is automatically added to the 'request' event.""
  const server = http.createServer();
  this.server = server;
  return server;
}

htcpcpServer.listen = function() {
  this.server.listen(arguments);
}

htcpcpServer.requestListener = function() {

}