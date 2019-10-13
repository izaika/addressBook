import { useSelector as useSelectorUntyped } from 'react-redux';

import { IStoreState } from '../types';

type TUseSelector = <TSelected>(
  selector: (state: IStoreState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected;

export const useSelector: TUseSelector = useSelectorUntyped;
