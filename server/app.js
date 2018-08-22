require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}...`);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

io.on('connection', (socket) => {
  setInterval(() => {
    socket.emit('message', { hello: 'world' });
  }, 1000);

  socket.on('my other event', (data) => {
    console.log(data);
  });
});
