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

    let endBalance = 0;
    let timeFrame = 0;
    let startingAmount = 0;
    let totalContributions = 0;
    let totalInterest = 0;

    switch(req.body.planningMode) {
      case 0:
        console.log("Executing Time Frame Mode Function...");
        // Run function for Time Frame Mode
        break;
      case 1:
        console.log("Executing Savings Goal Mode Function...");
        // Run function for Savings Goal Mode
        break;
      default:
        console.log("Invalid planningMode received: " + req.body.planningMode);
    }

    res.json({
      endBalance: endBalance,
      timeFrame: timeFrame,
      startingAmount: startingAmount,
      totalContributions: totalContributions,
      totalInterest: totalInterest
    })
  });

// app.post('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);