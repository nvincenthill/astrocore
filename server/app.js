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
  const fps = 1;

  // handle player one interactions
  socket.on('player one input', (data) => {
    console.log(data);
  });

  // handle player two interactions
  socket.on('player two input', (data) => {
    console.log(data);
  });

  // handle new player creation
  socket.on('new player', (data) => {
    console.log('creating new player', data);
  });

  // handle client disconnects
  socket.on('disconnect', () => {
    // remove disconnected player
  });

  setInterval(() => {
    const gameState = {};
    gameState.currentTime = new Date();
    socket.emit('gamestate', gameState);
  }, 1000 / fps);
});
