import React, { FC } from 'react';
import { Table, Button } from 'react-bootstrap';

import { IProps } from './types';

export const ContactsTable: FC<IProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.reduce((acc, contact, index) => {
          if (contact.isNew) return acc;

          return [
            ...acc,
            <tr key={contact.id}>
              <td>{index}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>,
          ];
        }, [])}
      </tbody>
    </Table>
  );
};
