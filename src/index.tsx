import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const app = (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));
