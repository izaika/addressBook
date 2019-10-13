import { IContact } from '../../../types';
import { IAction } from '../../types';
import { TPatch } from './types';

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

export interface IUpdateContact extends IAction<'UPDATE_CONTACT'> {
  type: 'UPDATE_CONTACT';
  id: string;
  patch: TPatch;
}

export const updateContact = (id: string, patch: TPatch): IUpdateContact => ({
  type: 'UPDATE_CONTACT',
  id,
  patch,
});
