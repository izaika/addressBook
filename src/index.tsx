import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { apiBaseUrl, apiKey } from '../config';

import { App } from './containers/App';
// import { ClassComponent } from './containers/App/class';
import { store } from './store';

axios.defaults.baseURL = apiBaseUrl;
axios.defaults.headers = {
  ...axios.defaults.headers,
  'Content-Type': 'application/json',
};
axios.interceptors.request.use(config => {
  config.params = { ...config.params, apiKey };
  return config;
});

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <ClassComponent initialCounter={4} /> */}
  </Provider>,
  document.getElementById('root')
);
