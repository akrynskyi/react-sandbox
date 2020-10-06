import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../store/user-state';

import { FormContainer, FormControl, resetForm } from '../form';
import { Text, Anchor, Row } from '../styled';

class UserRegister extends Component {

  state = {
    formTitle: 'Sign up',
    formValid: false,
    formValue: null,
    formSubmitted: false,
    formControls: {
      email: new FormControl('', 'Email', 'email', { required: true, email: true }),
      password: new FormControl('', 'Password', 'password', { required: true, minlenth: 6 }),
      username: new FormControl('', 'Username', 'text', { required: true }),
      age: new FormControl('', 'Age', 'number', { required: true }),
    }
  }

  componentDidMount() {
    document.title = 'Sign up | mycamerashoot';
  }

  onSubmit = (formValue) => {
    this.props.userSignUp(formValue);
    const resetedForm = resetForm(this.state);
    this.setState({...resetedForm});
  }

  onControlChange = (updatedForm) => {
    this.setState({
      ...updatedForm, 
      formValue: null,
      formSubmitted: false,
    });
  }

  render() {
    const { 
      formTitle, 
      formValid, 
      formControls 
    } = this.state;

    return (
      <>
        <FormContainer
          formTitle={formTitle}
          formValid={formValid}
          formControls={formControls}
          buttonTitle={formTitle}
          onControlChange={this.onControlChange}
          onFormSubmit={this.onSubmit}
        />
        <Row fontSize="14px">
          <Text>Already have an account? </Text>
          <Anchor to="/login">Log in</Anchor>
        </Row>
      </>
    );
  }

};

const mapDispatchToProps = (dispatch) => ({
  userSignUp: (credentials) => dispatch(userActions.userSignUp(credentials)),
});

export default connect(null, mapDispatchToProps)(UserRegister);