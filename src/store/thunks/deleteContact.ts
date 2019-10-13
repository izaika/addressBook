import axios from 'axios';

import { IContact } from '../../types';
import { IDispatch } from '../types';

import { getContacts } from './';
import { addLoader, removeLoader } from '../actions';

export const deleteContact = (dispatch: IDispatch) => async (_id: string) => {
  dispatch(addLoader('DELETE_CONTACT'));

  await axios.delete<IContact[]>(_id);
  getContacts(dispatch)();

  dispatch(removeLoader('DELETE_CONTACT'));
};
