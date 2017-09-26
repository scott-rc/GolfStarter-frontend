import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Listening for requests on port ${port}.`);
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});
