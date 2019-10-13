import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

import { IProps } from './types';

export const AddContactBtn: FC<IProps> = ({ onClick }) => (
  <Button variant="primary" onClick={onClick}>
    Add
  </Button>
);
