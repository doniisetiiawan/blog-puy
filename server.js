const express = require('express');
const bodyParser = require('body-parser');

require('./server/config/db');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With',
  );
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (
    req.headers
    && req.headers.authorization
    && req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(' ')[1],
      'RESTfulAPIs',
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      },
    );
  } else {
    req.user = undefined;
    next();
  }
});

const routes = require('./server/api/routes/articleListRoutes');

routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
