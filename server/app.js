require('dotenv').config();
const express = require('express');
// const http = require('http');
// const path = require('path');
const routes = require('./../routes');

const app = express();
// const server = http.Server(app);

app.set('port', process.env.SERVERPORT || 8080);

app.use(express.static('public/'));
app.use(express.static('client/dist'));
// routing
app.use('/api', routes);
module.exports = app;
