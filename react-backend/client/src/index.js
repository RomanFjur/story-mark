import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './store/reducer';
import watcherSaga from './sagas/api-saga';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
