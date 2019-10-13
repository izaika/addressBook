import { append, find, propEq, remove, update } from 'ramda';
import { Reducer } from 'redux';

import { findContactIndex } from '../../../utils';
import { IContact } from '../../../types';

import { initialState } from '../../initialState';

import { IAddContact, IRemoveContact, IUpdateContact } from '../../actions';

export const contacts: Reducer<
  IContact[],
  IAddContact | IRemoveContact | IUpdateContact
> = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return append(action.contact, state);

    case 'UPDATE_CONTACT': {
      const indexToUpdate = findContactIndex(action.id, state);

      const updatedContact: IContact = {
        ...state[indexToUpdate],
        [action.patch.prop]: action.patch.value,
      };

      return update(indexToUpdate, updatedContact, state);
    }

    case 'REMOVE_CONTACT': {
      const indexToRemove = findContactIndex(action.id, state);
      return remove(indexToRemove, 1, state);
    }
    default:
      return state;
  }
};
