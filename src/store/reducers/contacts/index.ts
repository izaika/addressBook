import { append, remove, update } from 'ramda';
import { IContact } from '../../../types';
import { findContactIndex } from '../../../utils';
import { initialState } from '../../initialState';
import { TReducer } from '../../types';

export const contacts: TReducer<IContact[]> = (
  state = initialState.contacts,
  action
) => {
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

    case 'SET_CONTACTS':
      return action.contacts;

    default:
      return state;
  }
};
