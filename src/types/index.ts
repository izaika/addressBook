export type TGender = 'male' | 'female';

export interface IContact {
  id: string;
  isNew: boolean;
  name: string;
  surname: string;
  gender: TGender;
  email: string;
  phone: string;
  address: string;
}
