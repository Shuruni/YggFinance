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
    console.log(req.body);
    console.log(req.file);
    res.json({
      transactions: [
        {merchant: "merchant1", amount: 7, date: (new Date()).toJSON(), isReconciled: true},
        {merchant: "merchant2", amount: 42, date: (new Date()).toJSON(), isReconciled: true},
        {merchant: "merchant3", amount: 69, date: (new Date()).toJSON(), isReconciled: false}
      ]
    });
  });

// app.post('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);