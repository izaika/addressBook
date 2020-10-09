import { combineReducers } from 'redux';

import { IStoreState, TAction } from '../types';

import { activeContactId } from './activeContactid';
import { contacts } from './contacts';
import { loaders } from './loaders';

export const reducers = combineReducers<IStoreState, TAction>({
  loaders,
  activeContactId,
  contacts,
});
