const socketIO = require('socket.io');
const app = require('./app');

const io = socketIO();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = process.env.SOCKETPORT || 8000;
io.listen(port);
console.log(`socket.io listening on port ${port}...`);

app.listen(app.get('port'), () => console.log(`express server listening on port ${app.get('port')}...`));
