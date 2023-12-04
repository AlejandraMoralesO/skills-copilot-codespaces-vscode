// Create web server

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola, mundo!\n');
});

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`El servidor se está ejecutando en http://${HOSTNAME}:${PORT}/`);
});