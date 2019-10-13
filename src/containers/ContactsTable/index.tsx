import React, { FC, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

import { setActiveContactId } from '../../store/actions';
import { getContacts, deleteContact } from '../../store/thunks';
import { useDispatch, useSelector } from '../../store/hooks';

export const ContactsTable: FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    getContacts(dispatch)();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.reduce((acc, contact, index) => {
          if (contact.isNew) return acc;

          return [
            ...acc,
            <tr key={contact._id}>
              <td>{index}</td>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.email}</td>
              <td>
                <Button
                  onClick={() => dispatch(setActiveContactId(contact._id))}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteContact(dispatch)(contact._id)}>
                  Delete
                </Button>
              </td>
            </tr>,
          ];
        }, [])}
      </tbody>
    </Table>
  );
};
