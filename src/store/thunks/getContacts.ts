import axios from 'axios';

import { IContact } from '../../types';
import { IDispatch } from '../types';

import { addLoader, removeLoader, setContacts } from '../actions';

export const getContacts = (dispatch: IDispatch) => async () => {
  dispatch(addLoader('GET_CONTACTS'));

  const { data } = await axios.get<IContact[]>('');
  dispatch(setContacts(data));

  dispatch(removeLoader('GET_CONTACTS'));
};
