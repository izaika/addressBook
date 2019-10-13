import { createStore, applyMiddleware, compose } from 'redux';

import { IStoreState, IAction, TStoreEnhancer } from './types';
import { initialState } from './initialState';
import { reducers } from './reducers';

const composeEnhancers: <R>(a: R) => R =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers<TStoreEnhancer>(applyMiddleware(...[]));

export const store = createStore<IStoreState, IAction, {}, TStoreEnhancer>(
  reducers,
  initialState,
  enhancer
);
