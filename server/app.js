require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// create a new gameState
const initialGameState = require('./game/exampleGraph');

// game logic
const { validateClicks } = require('./helpers');

server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}...`);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// TODO: make this into a class
const game = {
  gameState: initialGameState.exampleGraph(375, 812),
  playerOneName: null,
  playerTwoName: null,
  firstNodeClicked: null,
  addPlayer(name) {
    if (this.playerOneName === null) {
      this.playerOneName = name;
    } else if (this.playerTwoName === null) {
      this.playerTwoName = name;
    } else {
      console.log('Game is full - cannot add player');
    }
  },
  handleGameLoop() {
    // move fighters
    this.gameState.nodes.forEach((node) => {
      node.incrementScore();
      node.fighters.forEach((fighter) => {
        if (fighter.isAlive) {
          fighter.move();
        }
      });
    });
    // check for victory conditions
  },
};

// handle new connection
io.on('connection', (socket) => {
  console.log('heard a new connection');
  // create game
  // create new client
  // handle new player creation
  socket.on('new player', (data) => {
    console.log('adding a new player');
    game.addPlayer(data.name);
  });
  // handle clicks
  socket.on('click', (data) => {
    console.log('heard a click');
    validateClicks(game, data.x, data.y);
  });
});

// handle client disconnects
io.on('disconnect', () => {
  // remove disconnected player
  console.log('heard a disconnect');
});

const fps = 60;
const clientPacket = {};

// event loop
setInterval(() => {
  game.handleGameLoop();
  clientPacket.gameState = game.gameState;
  io.emit('gamestate', clientPacket);
}, 1000 / fps);
