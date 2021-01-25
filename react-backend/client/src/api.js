import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000/admin/analytics/users');
function subscribeToData(cb) {
  socket.on('users', users => {cb(null, users)});
  socket.emit('subscribeToData', 3000);
}
export { subscribeToData };