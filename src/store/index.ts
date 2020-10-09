
import {
  applyMiddleware,
  composeEnhancers,
  createStore,
} from 'airslate-ts-redux';

import { TCGP } from './types';
import { initialState } from './initialState';
import { reducers } from './reducers';

const enhancer = composeEnhancers<TCGP>(applyMiddleware(...[]));

export const store = createStore<TCGP>(
  reducers,
  initialState,
  enhancer
);
