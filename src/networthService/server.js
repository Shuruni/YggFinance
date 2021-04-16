'use strict';

import calcNetWorth from "./calcNetWorth.js"
import express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.post('/', function (req, res) {
    console.log(req.body)

    // IMPLEMENT THIS FUNCTION YOURSELF in calcNetWorth.js
    let netWorth = calcNetWorth(req.body);

    res.json({
      netWorth: netWorth
    })
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);