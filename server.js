const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
server.listen(8000, '0.0.0.0', () => {
    console.log('Server running at http://0.0.0.0:8000/');
});