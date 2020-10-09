import axios from 'axios';

import { IContact } from '../../types';
import { addLoader, removeLoader, setContacts } from '../actions';
import { TDispatch } from '../types';

export const getContacts = (dispatch: TDispatch) => async () => {
  dispatch(addLoader('GET_CONTACTS'));

  const { data } = await axios.get<IContact[]>('');
  dispatch(setContacts(data));

  dispatch(removeLoader('GET_CONTACTS'));
};
