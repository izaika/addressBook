import { MakeTUseSelector } from 'airslate-ts-redux';
import { useSelector as useSelectorUntyped } from 'react-redux';

import { IStoreState } from '../types';

export const useSelector: MakeTUseSelector<IStoreState> = useSelectorUntyped;
