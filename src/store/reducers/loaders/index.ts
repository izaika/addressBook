import { Reducer } from 'redux';

import { appendIfNotIncludes, removeIfIncludes } from '../../../utils';

import { initialState } from '../../initialState';

import { TActions } from '../../types';
import { IAddLoader, IRemoveLoader } from '../../actions';

const reducer: Reducer<TActions[], IAddLoader | IRemoveLoader> = (
  state = initialState.loaders,
  action
) => {
  switch (action.type) {
    case 'ADD_LOADER':
      return appendIfNotIncludes(action.name, state);

    case 'REMOVE_LOADER':
      return removeIfIncludes(action.name, state);

    default:
      return state;
  }
};

export default reducer;
