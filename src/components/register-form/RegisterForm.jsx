import React, { Component } from 'react';
import { 
  FormControl, 
  validateFormControl, 
  validateForm, 
  isMatchValidator,
  getFormValue
} from '../../form-utils';

import { InputField } from '../input-field';
import { 
  Form,
  FormHeader, 
  FormBody, 
  FormFooter,
  Button,
  Row, 
  ButtonTransparent,
  Text,
  Box,
  PrintCode
} from '../styled';

export class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      formValue: null,
      formSubmitted: false,
      formControls: {
        firstName: new FormControl('', 'Your name', 'text', { required: true }),
        lastName: new FormControl('', 'Last name', 'text', { required: true }),
        email: new FormControl('', 'Email', 'email', { required: true, email: true }),
        password: new FormControl('', 'Password', 'password', { required: true, minlenth: 6 }),
        confirmPassword: new FormControl('', 'Confirm password', 'password', { required: true })
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
      const { password } = updatedFormControls;

      const { valid, errors } = validateFormControl(
        {...formControl, controlName, value},
        [
          { 
            shouldValidate: 'confirmPassword', 
            validatorFn: isMatchValidator(password),
          }
        ]
      );

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
        formControls: updatedFormControls
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
            Create account
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
              Create account
            </Button>
            <Row justify="center">
              <Text>
                Already have an account?
              </Text>
              <ButtonTransparent onClick={toggleForm}>
                Sign-in
              </ButtonTransparent>
            </Row>
          </FormFooter>
        </Form>
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