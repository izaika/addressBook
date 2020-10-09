import { IUpdateContact } from '../../store/actions';
import { TPatch } from '../../store/actions/contacts/types';
import { IContact } from '../../types';

export interface IProps {
  contact: IContact;
  updateProp: (patch: TPatch) => IUpdateContact;
  onCancelClick: () => void;
  onSubmit: (contact: IContact) => void;
}
