import { IContact } from '../../types';
import { IAction, TActions } from '../types';

export interface IAddContact extends IAction<'ADD_CONTACT'> {
  type: 'ADD_CONTACT';
  contact: IContact;
}
export const addContact = (contact: IContact): IAddContact => ({
  type: 'ADD_CONTACT',
  contact,
});

export interface IRemoveContact extends IAction<'REMOVE_CONTACT'> {
  type: 'REMOVE_CONTACT';
  id: string;
}
export const removeContact = (id: string): IRemoveContact => ({
  type: 'REMOVE_CONTACT',
  id,
});
