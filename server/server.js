const expresso = require('../expresso');
const app = expresso();
const path = require('path');
const htcpcp = require('../expresso/lib/htcpcp-server')

app.use((req, res, next) => {console.log(req.method); next()});

app.get('/', (req, res) => {
  res.send('Successful GET request');
});
app.brew('/', (req, res) => {
  res.send('Successful BREW request');
});

//app.listen(3000, () => console.log('Listening on port 3000'))

const server = htcpcp.createServer();
server.listen(3000, () => console.log('HTCPCP Listening on port 3000'))

