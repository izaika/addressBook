import { IAction, TActions } from '../types';

export interface IAddLoader extends IAction<'ADD_LOADER'> {
  type: 'ADD_LOADER';
  name: TActions;
}
export const addLoader = (name: TActions): IAddLoader => ({
  type: 'ADD_LOADER',
  name,
});

export interface IRemoveLoader extends IAction<'REMOVE_LOADER'> {
  type: 'REMOVE_LOADER';
  name: TActions;
}
export const removeLoader = (name: TActions): IRemoveLoader => ({
  type: 'REMOVE_LOADER',
  name,
});
