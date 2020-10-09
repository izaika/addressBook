import { IContact } from '../../../types';

import { TPatch } from './types';

export type TAddContact = ReturnType<typeof addContact>;
export const addContact = (contact: IContact) => ({
  type: 'ADD_CONTACT' as const,
  contact,
});

export type TRemoveContact = ReturnType<typeof removeContact>;
export const removeContact = (id: string) => ({
  type: 'REMOVE_CONTACT' as const,
  id,
});

export type TUpdateContact = ReturnType<typeof updateContact>;
export const updateContact = (id: string, patch: TPatch) => ({
  type: 'UPDATE_CONTACT' as const,
  id,
  patch,
});

export type TSetContacts = ReturnType<typeof setContacts>;
export const setContacts = (contacts: IContact[]) => ({
  type: 'SET_CONTACTS' as const,
  contacts,
});
