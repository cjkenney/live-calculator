import openSocket from 'socket.io-client';
const socket = openSocket('https://pure-plateau-88745.herokuapp.com/');

const sendMessage = () => {
  socket.emit('calculation');
};

export { sendMessage };
