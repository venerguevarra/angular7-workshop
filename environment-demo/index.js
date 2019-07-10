"use strict";

const express = require("express");
const path = require('path');

const port = 4100;

const app = express();

app.use(express.static(path.join('dist/', 'environment-demo')));

app.listen(_port, function () {
    console.log(`Node Express server for ${app.name} listening on http://localhost:${port}`);
})
