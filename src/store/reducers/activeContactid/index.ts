import { Reducer } from 'redux';

import { initialState } from '../../initialState';

import { ISetActiveContactId } from '../../actions';

export const activeContactId: Reducer<string, ISetActiveContactId> = (
  state = initialState.activeContactId,
  action
) => {
  switch (action.type) {
    case 'SET_ACTIVE_CONTACT_ID':
      return action.id;

    default:
      return state;
  }
};
