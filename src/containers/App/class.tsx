import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLoader, removeLoader } from '../../store/actions';
import { IStoreState } from '../../store/types';

import {
  IDispatchProps,
  IOwnProps,
  IProps,
  IState,
  IStateProps,
} from './classTypes';

class ClassComponentUnconnected extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: props.initialCounter,
    };
  }

  componentDidMount() {
    this.props.addLoader('test');
  }

  componentDidUpdate() {
    console.log(this.props.contacts, this.props.loaders);
  }

  render() {
    return (
      <>
        <div>counter: {this.state.counter}</div>
        <button onClick={() => this.incrementCounter()}>increment</button>
      </>
    );
  }

  incrementCounter = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
}

export const ClassComponent = connect<
  IStateProps,
  IDispatchProps,
  IOwnProps,
  IStoreState
>(state => ({ contacts: state.contacts, loaders: state.loaders }), {
  addLoader,
  removeLoader,
})(ClassComponentUnconnected);
