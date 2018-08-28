import io from 'socket.io-client';

// TODO: Refactor with environmental variables for developement verses deployment
const socket = io.connect('http://localhost:8080');

export default socket;
