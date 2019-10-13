export interface IContact {
  id: string;
  isNew: boolean;
  name: string;
  surname: string;
  gender: 'male' | 'female';
  yearOfBirth: number;
  email: string;
  phone: number;
  address: string;
}
