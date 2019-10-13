import { Dispatch, Action, StoreEnhancer } from 'redux';

import { IContact } from '../types';

export type TLoaders = 'GET_CONTACTS' | 'DELETE_CONTACT';

type TLoadersActions = 'ADD_LOADER' | 'REMOVE_LOADER';
type TActiveContactIdActions = 'SET_ACTIVE_CONTACT_ID';
type TContactsActions =
  | 'ADD_CONTACT'
  | 'UPDATE_CONTACT'
  | 'REMOVE_CONTACT'
  | 'SET_CONTACTS';

export type TActions =
  | TLoadersActions
  | TActiveContactIdActions
  | TContactsActions;

export interface IStoreState {
  loaders: TActions[];
  activeContactId: string;
  contacts: IContact[];
}

export interface IAction<T extends TActions = TActions> extends Action<T> {}
export interface IDispatch<A extends TActions = TActions>
  extends Dispatch<IAction<A>> {}

export type TStoreEnhancer = StoreEnhancer<{ dispatch: IDispatch }, {}>;
