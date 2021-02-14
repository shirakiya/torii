import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import App from './App.jsx';
import 'bootstrap';
import './../css/main.scss';
import './images.js';

const store = configureStore();

// XXX: Workaround for setting large width of CodeMirror.
// ref.) https://github.com/graphql/graphiql/issues/33#issuecomment-318188555
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
(async () => {
  await sleep(500);

  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
})();
