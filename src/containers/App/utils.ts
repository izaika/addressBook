import { IContact } from '../../types';
import { guid } from '../../utils';

export const getNewContact = (): IContact => ({
  _id: guid(),
  isNew: true,
  name: '',
  surname: '',
  email: '',
  phone: '',
  gender: 'male',
  address: '',
});
