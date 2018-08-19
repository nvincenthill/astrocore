const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const routes = require('./../routes');

const app = express();
const server = http.Server(app);
const io = socketIO(server).listen(server);

app.set('port', process.env.PORT || 8080);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// routing
app.use('/api', routes);

// Add the WebSocket handlers
io.on('connection', (socket) => {});

// testing
setInterval(() => {
  io.sockets.emit('message', 'hi!');
}, 1000);

module.exports = app;
