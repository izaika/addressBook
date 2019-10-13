import { findIndex, propEq } from 'ramda';

import { IContact } from '../../types';

export const findContactIndex = (id: string, contacts: IContact[]) =>
  findIndex(propEq('_id', id), contacts);
