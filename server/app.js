require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// create a new gameState
const initialGameState = require('./game/exampleGraph');

server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}...`);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

io.on('connection', (socket) => {
  const game = {
    gameState: initialGameState.exampleGraph(375, 812),
    playerOneName: null,
    playerTwoName: null,
    addPlayer(name) {
      if (this.playerOneName === null) {
        this.playerOneName = name;
      } else if (this.playerTwoName === null) {
        this.playerTwoName = name;
      } else {
        console.log('Game is full - cannot add player');
      }
    },
  };

  const fps = 60;
  const clientPacket = {};

  // handle new player creation
  socket.on('new player', (data) => {
    game.addPlayer(data.name);
  });

  // handle clicks
  socket.on('click', (data) => {
    console.log(data);
  });

  // handle client disconnects
  socket.on('disconnect', () => {
    // remove disconnected player
  });

  // emit gameState to clients
  setInterval(() => {
    clientPacket.currentTime = new Date();
    clientPacket.gameState = game.gameState;
    socket.emit('gamestate', clientPacket);
  }, 1000 / fps);
});
