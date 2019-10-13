import { append, find, propEq, remove } from 'ramda';
import { Reducer } from 'redux';

import { initialState } from '../../initialState';

import { IContact } from '../../../types';
import { IAddContact, IRemoveContact } from '../../actions';

const reducer: Reducer<IContact[], IAddContact | IRemoveContact> = (
  state = initialState.contacts,
  action
) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return append(action.contact, state);

    case 'REMOVE_CONTACT': {
      const indexToRemove = find(propEq('id', action.id), state);
      return remove(indexToRemove, 1, state);
    }
    default:
      return state;
  }
};

export default reducer;
