import { eventChannel } from 'redux-saga';
import { socket } from '../../../sockets/socket';

export function createFreshPostsChannel() {
  return eventChannel(emitter => {
    const eventHandler = (data) => {
      emitter({type: 'SOCKET_EVENT', payload: data});
    }
    socket.on('giveMePosts', eventHandler);
    return () => {
      socket.off('giveMePosts', eventHandler);
      console.log('disconnected');
    };
  });
}