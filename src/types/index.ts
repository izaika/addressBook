export type TGender = 'male' | 'female';

export interface IContact {
  _id: string;
  isNew: boolean;
  name: string;
  surname: string;
  gender: TGender;
  email: string;
  phone: string;
  address: string;
}
