import { addLoader, removeLoader } from '../../store/actions';
import { IContact } from '../../types';

export interface IOwnProps {
  initialCounter: number;
}

export interface IState {
  counter: number;
}

export interface IStateProps {
  loaders: string[];
  contacts: IContact[];
}

export interface IDispatchProps {
  addLoader: typeof addLoader;
  removeLoader: typeof removeLoader;
}

export interface IProps extends IOwnProps, IStateProps, IDispatchProps {}
