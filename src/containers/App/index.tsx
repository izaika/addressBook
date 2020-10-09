import React, { FC } from 'react';
import { find, propEq } from 'ramda';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

import { ContactsTable } from '../';
import { ContactForm, Loader } from '../../components';
import {
  addContact,
  setActiveContactId,
  updateContact,
} from '../../store/actions';
import { TPatch } from '../../store/actions/contacts/types';
import { useDispatch, useSelector } from '../../store/hooks';
import { IContact } from '../../types';

import { AddContactBtn } from './components';
import { getNewContact } from './utils';

export const App: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({ loaders }) => !!loaders.length);

  const activeContactId = useSelector(state => state.activeContactId);
  const activeContact = useSelector(({ contacts }) =>
    find<IContact>(propEq('_id', activeContactId), contacts)
  );

  const resetActiveContactId = () => dispatch(setActiveContactId(null));

  return (
    <>
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
            onCancelClick={() => resetActiveContactId()}
            onSubmit={async contact => {
              console.log('starting');

              const result = await axios.put(
                '',
                JSON.stringify({ ...contact, isNew: false }),
                {
                  params: {
                    u: 'true',
                    q: JSON.stringify({ _id: contact._id }),
                  },
                }
              );

              console.log(result);
              resetActiveContactId();
            }}
          />
        ) : (
          <>
            <AddContactBtn
              onClick={() => {
                const newContact = getNewContact();

                dispatch(addContact(newContact));
                dispatch(setActiveContactId(newContact._id));
              }}
            />
            <ContactsTable />
          </>
        )}
      </Container>
      {isLoading && <Loader />}
    </>
  );
};
