import { combineReducers } from 'redux';
import { IStoreState, IAction } from '../types';

import contacts from './contacts';
import loaders from './loaders';

export const reducers = combineReducers<IStoreState, IAction>({
  loaders,
  contacts,
});
