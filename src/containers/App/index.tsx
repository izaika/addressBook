import React from 'react';
import { find, propEq } from 'ramda';
import { Container, Row, Col } from 'react-bootstrap';

import {
  addContact,
  setActiveContactId,
  updateContact,
} from '../../store/actions';

import { TPatch } from '../../store/actions/contacts/types';

import { useSelector, useDispatch } from '../../store/hooks';

import { IContact } from '../../types';
import { ContactForm, ContactsTable } from '../../components';

import { AddContactBtn } from './components';
import { getNewContact } from './utils';

export const App = () => {
  const dispatch = useDispatch();

  const activeContactId = useSelector(state => state.activeContactId);
  const activeContact = useSelector(({ contacts }) =>
    find<IContact>(propEq('id', activeContactId), contacts)
  );
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <Row>
        <Col>Address book</Col>
      </Row>
      <br />

      {activeContactId ? (
        <ContactForm
          contact={activeContact}
          updateProp={(patch: TPatch) =>
            dispatch(updateContact(activeContactId, patch))
          }
        />
      ) : (
        <>
          <AddContactBtn
            onClick={() => {
              const newContact = getNewContact();

              dispatch(addContact(newContact));
              dispatch(setActiveContactId(newContact.id));
            }}
          />
          <ContactsTable contacts={contacts} />{' '}
        </>
      )}
    </Container>
  );
};
