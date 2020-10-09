
import { appendIfNotIncludes, removeIfIncludes } from '../../../utils';
import { initialState } from '../../initialState';
import { TReducer } from '../../types';

export const loaders: TReducer<string[]> = (
  state = initialState.loaders,
  action
) => {
  switch (action.type) {
    case 'ADD_LOADER':
      return appendIfNotIncludes(action.id, state);

    case 'REMOVE_LOADER':
      return removeIfIncludes(action.id, state);

    default:
      return state;
  }
};
