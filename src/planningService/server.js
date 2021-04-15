'use strict';

const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.post('/', upload.single('file'), function (req, res, next) {
    console.log(req.file, req.body);
    res.json({
      transactions: [
        {merchant: "merchant1", amount: 7, date: "2020/07/23", isReconciled: true},
        {merchant: "merchant2", amount: 42, date: "2021/01/17", isReconciled: true},
        {merchant: "merchant3", amount: 69, date: "2021/04/15", isReconciled: false}
      ]
    });
  });

// app.post('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);