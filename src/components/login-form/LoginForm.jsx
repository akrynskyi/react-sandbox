import React, { Component } from 'react';

import { 
  Form, 
  FormHeader, 
  FormBody, 
  FormFooter,
  FormControl, 
  ControlLabel, 
  Input, 
  ControlErrors,
  Button,
} from '../styled';

export class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Form>
        <FormHeader>Sign in</FormHeader>
        <FormBody>
          <FormControl>
            <ControlLabel>Email</ControlLabel>
            <Input />
            <ControlErrors>test</ControlErrors>
          </FormControl>
          <FormControl>
            <ControlLabel>Email</ControlLabel>
            <Input />
            <ControlErrors>test</ControlErrors>
          </FormControl>
        </FormBody>
        <FormFooter>
          <Button grow>Sign in</Button>
        </FormFooter>
      </Form>
    );
  }
  
}