import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import App from './App.jsx';
import 'bootstrap';
import './../css/main.scss';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
