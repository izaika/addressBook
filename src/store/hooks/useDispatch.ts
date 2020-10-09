import { MakeTUseDispatch } from 'airslate-ts-redux';
import { useDispatch as useDispatchUntyped } from 'react-redux';

import { TCGP } from '../types';

export const useDispatch: MakeTUseDispatch<TCGP> = useDispatchUntyped;
