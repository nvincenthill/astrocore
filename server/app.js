require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Game = require('./game/Game');
const createInitialGameState = require('./game/exampleGame');

// game logic
const { validateClick } = require('./helpers');

server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}...`);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// create game
const initialGameState = createInitialGameState(375, 812); // pass width and height of client viewport
const game = new Game(initialGameState);

// handle new connection
io.on('connection', (socket) => {
  console.log('heard a new connection');

  // handle new player creation
  socket.on('new player', (data) => {
    console.log('adding a new player');
    game.addPlayer(data.name);
  });
  // handle clicks
  socket.on('click', (data) => {
    console.log('heard a click');
    validateClick(game, data.x, data.y, data.player);
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
  clientPacket.gameState = game.state;
  io.emit('gamestate', clientPacket);
}, 1000 / fps);
