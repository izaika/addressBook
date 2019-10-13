import { combineReducers } from 'redux';
import { IStoreState, IAction } from '../types';

import { activeContactId } from './activeContactid';
import { contacts } from './contacts';
import { loaders } from './loaders';

export const reducers = combineReducers<IStoreState, IAction>({
  loaders,
  activeContactId,
  contacts,
});
