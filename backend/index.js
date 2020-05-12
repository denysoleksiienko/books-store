const http = require('http');
const path = require('path');
const fs = require('fs');

const mime = require('mime-types');

const hostname = '127.0.0.1';
const port = 3000;

const BASE_PATH = path.join(__dirname, '..', 'build');

const server = http.createServer((req, res) => {
  const { url } = req;

  const fileName = url === '/' ? 'index.html' : url;
  const target = path.join(BASE_PATH, fileName);

  const contentType = mime.contentType(path.basename(target));
  res.writeHead(200, { 'Content-Type': contentType });

  const fileStream = fs.createReadStream(target);

  fileStream.on('error', (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('Page not found!');
      return;
    }
  });

  fileStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
