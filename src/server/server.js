import express from 'express';
import http from 'http';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.createServer(app).listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
