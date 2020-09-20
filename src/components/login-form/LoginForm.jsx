import React, { Component } from 'react';
import { 
  FormControl, 
  validateFormControl, 
  validateForm, 
  getFormValue 
} from '../../form-utils';

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
  PrintCode
} from '../styled';

export class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      formValue: null,
      formSubmitted: false,
      formControls: {
        email: new FormControl('', 'Email', 'email', { required: true, email: true }),
        password: new FormControl('', 'Password', 'password', { required: true }),
      }
    };
  }

  onSubmit(formControls) {
    return (e) => {
      e.preventDefault();
      const formValue = getFormValue(formControls);
      this.setState({ formValue, formSubmitted: true });
    }
  }

  handleControlChange(controlName, formControls) {
    return ({target}) => {
      const { value } = target;
      const updatedFormControls = {...formControls};
      const formControl = updatedFormControls[controlName];
      const { valid, errors } = validateFormControl({...formControl, controlName, value});

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
        formSubmitted: false,
        formControls: updatedFormControls,
      });
    }
  }

  render() {
    const { 
      formValid, 
      formControls, 
      formValue, 
      formSubmitted 
    } = this.state;
    const { toggleForm } = this.props;

    return (
      <>
        <Form onSubmit={this.onSubmit(formControls)}>
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
              bgc="#ff9100"
              disabled={!formValid}
            >
              Sign in
            </Button>
          </FormFooter>
        </Form>
        <Box 
          mt="30px" 
          mb="30px"
        >
          <Divider>
            <DividerText>
              Don't have an account?
            </DividerText>
          </Divider>
          <Button 
            grow
            bgc="#212121"
            onClick={toggleForm}
          >
            Create account
          </Button>
        </Box>
        <Box mt="30px">
          {
            formSubmitted 
            && <PrintCode>
                {JSON.stringify(formValue, null, 4)}
              </PrintCode>
          }
        </Box>
      </>
    );
  }
  
}