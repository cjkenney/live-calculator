import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4040');

const sendMessage = () => {
  socket.emit('calculation');
};

export { sendMessage };
