import React, { Component } from 'react';
import { FormControl, validateFormControl, validateForm } from '../../form-utils';

import { InputField } from '../input-field';
import { 
  Form, 
  FormHeader, 
  FormBody, 
  FormFooter,
  Button,
  Box,
  Divider,
  DividerText,
} from '../styled';

export class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      formControls: {
        email: new FormControl('', 'Email', 'email', { required: true, email: true }),
        password: new FormControl('', 'Password', 'password', { required: true }),
      }
    };
  }

  handleControlChange(controlName, formControls) {
    return ({target}) => {
      const { value } = target;
      const updatedFormControls = {...formControls};
      const formControl = updatedFormControls[controlName];
      const { validation, label } = formControl;
      const { valid, errors } = validateFormControl(value, validation, label);

      const updatedFormControl = {
        ...formControl,
        dirty: true,
        value,
        valid,
        errors,
      };

      updatedFormControls[controlName] = updatedFormControl;
      const formValid = validateForm(updatedFormControls);

      this.setState({
        formValid,
        formControls: updatedFormControls,
      });
    }
  }

  render() {
    const { formValid, formControls } = this.state;

    return (
      <>
        <Form>
          <FormHeader>
            Sign in
          </FormHeader>
          <FormBody>
            {
              Object
                .keys(formControls)
                .map((controlName) => (
                  <InputField 
                    {...formControls[controlName]}
                    key={controlName}
                    onChange={this.handleControlChange(controlName, formControls)}
                  />
                ))
            }
          </FormBody>
          <FormFooter>
            <Button 
              grow
              bgc="#ffa726"
              disabled={!formValid}
            >
              Sign in
            </Button>
          </FormFooter>
        </Form>
        <Box>
          <Divider>
            <DividerText>
              Don't have an account?
            </DividerText>
          </Divider>
          <Button 
            grow
          >
            Create account
          </Button>
        </Box>
      </>
    );
  }
  
}