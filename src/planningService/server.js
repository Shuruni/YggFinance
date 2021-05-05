'use strict';

import calcMonthlyContributions from "./calcMonthlyContibutions.js";
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
      monthlyContributions: NaN,
      startingAmount: NaN,
      totalContributions: NaN,
      totalInterest: NaN
    }

    switch(req.body.planningMode) {
      case 0:
        console.log("Executing Monthly rew contributions Mode Function...");
        calcMonthlyContributions(req.body, responseBody);
        break;
      case 1:
        console.log("Executing Savings Goal Mode Function...");
        calcEndBalance(req.body, responseBody);
        break;
      default:
        console.log("Invalid planningMode received: " + req.body.planningMode);
        break;
    }

    res.json(responseBody);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);