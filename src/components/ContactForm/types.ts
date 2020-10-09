import { TUpdateContact } from '../../store/actions';
import { TPatch } from '../../store/actions/contacts/types';
import { IContact } from '../../types';

export interface IProps {
  contact: IContact;
  updateProp: (patch: TPatch) => TUpdateContact;
  onCancelClick: () => void;
  onSubmit: (contact: IContact) => void;
}
