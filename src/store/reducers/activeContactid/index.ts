import { initialState } from '../../initialState';
import { TReducer } from '../../types';

export const activeContactId: TReducer<string> = (
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
