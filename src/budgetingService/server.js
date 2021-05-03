'use strict';

import parseRequest from "./parseRequest.js";
import express from "express";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json()) // for parsing application/json
app.post('/', upload.single('file'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);

    parseRequest(req)
      .then(transactions => res.json({transactions: transactions}))
      .catch(err => next(err));
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);