import {
  MakeTAction,
  MakeTActionType,
  MakeTCGP,
  MakeTDispatch,
} from 'airslate-ts-redux';
import { Reducer } from 'redux';

import { IContact } from '../types';

import * as actions from './actions';

export interface IStoreState {
  loaders: string[];
  activeContactId: string;
  contacts: IContact[];
}

export type TCGP = MakeTCGP<IStoreState, {}, typeof actions>;
export type TActionType = MakeTActionType<TCGP>;
export type TAction = MakeTAction<TCGP>;
export type TDispatch = MakeTDispatch<TCGP>;
export type TReducer<T> = Reducer<T, TAction>;
