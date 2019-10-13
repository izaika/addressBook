import React, { FC, ChangeEvent } from 'react';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';

import { TGender } from '../../types';

import { IProps } from './types';

export const ContactForm: FC<IProps> = props => {
  const { contact } = props;
  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();
        props.onSubmit(contact);
      }}
    >
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={contact.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.updateProp({ prop: 'name', value: e.target.value })
          }
        />
        <br />
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={contact.surname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.updateProp({ prop: 'surname', value: e.target.value })
          }
        />
        <br />
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          placeholder="Select gender"
          value={contact.gender}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            props.updateProp({
              prop: 'gender',
              value: e.target.value as TGender,
            })
          }
        >
          <option>male</option>
          <option>female</option>
        </Form.Control>
        <br />
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter e-mail"
          value={contact.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.updateProp({ prop: 'email', value: e.target.value })
          }
        />
        <br />
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          value={contact.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.updateProp({ prop: 'phone', value: e.target.value })
          }
        />
        <br />
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter address"
          value={contact.address}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.updateProp({ prop: 'address', value: e.target.value })
          }
        />
      </Form.Group>
      <ButtonToolbar>
        <Button variant="success" type="submit">
          Save
        </Button>
        <Button variant="light" onClick={props.onCancelClick}>
          Cancel
        </Button>
      </ButtonToolbar>
    </Form>
  );
};
