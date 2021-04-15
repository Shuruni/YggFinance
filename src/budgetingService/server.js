'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.post('/', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
  });

// app.post('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);