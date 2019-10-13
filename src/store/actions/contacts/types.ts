import { IContact, TGender } from '../../../types';

interface IPatchContact {
  prop: keyof IContact;
}

interface IPatchBoolean extends IPatchContact {
  prop: 'isNew';
  value: boolean;
}

interface IPatchString extends IPatchContact {
  prop: 'name' | 'surname' | 'email' | 'phone' | 'address';
  value: string;
}

interface IPatchGender extends IPatchContact {
  prop: 'gender';
  value: TGender;
}

export type TPatch = IPatchBoolean | IPatchString | IPatchGender;
