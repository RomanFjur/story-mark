import { eventChannel } from 'redux-saga';
import { socket } from '../../../sockets/socket';

export function createFreshUsersChannel() {
  return eventChannel(emitter => {
    const eventHandler = (data) => {
      emitter({type: 'SOCKET_EVENT', payload: data});
    }
    socket.on('giveMeUsers', eventHandler);
    return () => {
      socket.off('giveMeUsers', eventHandler);
      console.log('disconnected');
    };
  });
}
