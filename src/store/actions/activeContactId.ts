import { IAction, TActions } from '../types';

export interface ISetActiveContactId extends IAction<'SET_ACTIVE_CONTACT_ID'> {
  type: 'SET_ACTIVE_CONTACT_ID';
  id: string;
}
export const setActiveContactId = (id: string): ISetActiveContactId => ({
  type: 'SET_ACTIVE_CONTACT_ID',
  id,
});
