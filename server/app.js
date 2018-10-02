require('dotenv').config();
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Game = require('./game/Game');
const createInitialGameState = require('./game/exampleGame');

server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}...`);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// create game
// TODO: Refactor to pass width and height of client viewport
const initialGameState = createInitialGameState();
const game = new Game(initialGameState);

// handle new connection
// TODO: Refactor socket.io new connection logic
io.on('connection', (socket) => {
  console.log('heard a new connection');

  // TODO: Refactor client creation with Client class
  // handle new player creation
  socket.on('new player', (data) => {
    console.log('adding a new player', data);
    game.addPlayer(data.name);
  });
  // handle clicks
  socket.on('click', (click) => {
    console.log(`click from ${click.player}`, click.x, click.y);
    game.validateClick(click.x, click.y, click.player);
  });
});

// handle client disconnects
io.on('disconnect', () => {
  // remove disconnected player
  console.log('heard a disconnect');
});

const fps = 60;
const clientPacket = {};

const startGame = () => {
  // event loop
  setInterval(() => {
    game.handleGameLoop();
    clientPacket.gameState = game.state;
    io.emit('gamestate', clientPacket);
  }, 1000 / fps);
};

startGame();
