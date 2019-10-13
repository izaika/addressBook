import { IAction, TActions, TLoaders } from '../types';

export interface IAddLoader extends IAction<'ADD_LOADER'> {
  type: 'ADD_LOADER';
  name: TActions | TLoaders;
}
export const addLoader = (name: TActions | TLoaders): IAddLoader => ({
  type: 'ADD_LOADER',
  name,
});

export interface IRemoveLoader extends IAction<'REMOVE_LOADER'> {
  type: 'REMOVE_LOADER';
  name: TActions | TLoaders;
}
export const removeLoader = (name: TActions | TLoaders): IRemoveLoader => ({
  type: 'REMOVE_LOADER',
  name,
});
