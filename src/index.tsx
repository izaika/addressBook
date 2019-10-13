import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import axios from 'axios';

import { App } from './containers/App';

import { store } from './store';

import { apiBaseUrl, mongoApiKey } from '../config';

axios.defaults.baseURL = apiBaseUrl;
axios.defaults.headers = {
  ...axios.defaults.headers,
  'Content-Type': 'application/json',
};
axios.interceptors.request.use(config => {
  config.params = { ...config.params, apiKey: mongoApiKey };
  return config;
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
