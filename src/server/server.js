import express from 'express';
import http from 'http';

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.createServer(app).listen(process.env.PORT || 8080);
