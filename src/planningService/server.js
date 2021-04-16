'use strict';

import calcTimeFrame from "./calcTimeFrame.js";
import calcEndBalance from "./calcEndBalance.js";
import express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.post('/', function (req, res) {
    console.log(req.body)

    let responseBody = {
      endBalance: NaN,
      timeFrame: NaN,
      startingAmount: NaN,
      totalContributions: NaN,
      totalInterest: NaN
    }

    switch(req.body.planningMode) {
      case 0:
        console.log("Executing Time Frame Mode Function...");
        // IMPLEMENT THIS FUNCTION YOURSELF in calcTimeFrame.js
        calcTimeFrame(req.body, responseBody);
        break;
      case 1:
        console.log("Executing Savings Goal Mode Function...");
        // IMPLEMENT THIS FUNCTION YOURSELF in calcEndBalance.js
        calcEndBalance(req.body, responseBody);
        break;
      default:
        console.log("Invalid planningMode received: " + req.body.planningMode);
    }

    res.json(responseBody);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);