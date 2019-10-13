import { useDispatch as useDispatchUntyped } from 'react-redux';

import { IDispatch } from '../types';

export const useDispatch: () => IDispatch = useDispatchUntyped;
