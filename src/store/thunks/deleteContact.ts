import axios from 'axios';

import { IContact } from '../../types';
import { addLoader, removeLoader } from '../actions';
import { TDispatch } from '../types';

import { getContacts } from './';

export const deleteContact = (dispatch: TDispatch) => async (_id: string) => {
  dispatch(addLoader('DELETE_CONTACT'));

  await axios.delete<IContact[]>(_id);
  getContacts(dispatch)();

  dispatch(removeLoader('DELETE_CONTACT'));
};
