import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
// import { loadState, saveState } from './utils/localStorage';
import reduxThunk from 'redux-thunk';
import './styles/styles.css';
// import { access } from 'fs';

// Testing on browser
// import axios from 'axios';
// window.axios = axios;

const store = createStore(
  rootReducer,
  // loadState(),
  applyMiddleware(reduxThunk)
);
// store.subscribe(() =>
//   saveState({
//     accessToken: store.getState().accessToken,
//     refreshToken: store.getState().refreshToken
//   })
// );
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
