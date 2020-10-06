import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../store/user-state';

import { FormContainer, FormControl, resetForm } from '../form';
import { Text, Anchor, Row } from '../styled';

class UserLogin extends Component {
  
  state = {
    formTitle: 'Log in',
    formValid: false,
    formValue: null,
    formSubmitted: false,
    formControls: {
      email: new FormControl('', 'Email', 'email', { required: true, email: true }),
      password: new FormControl('', 'Password', 'password', { required: true }),
    }
  }

  componentDidMount() {
    document.title = 'Log in | mycamerashoot';
  }

  onSubmit = (formValue) => {
    this.props.userSignIn(formValue);
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
          <Text>Dont't have an account? </Text>
          <Anchor to="/register">Sign up</Anchor>
        </Row>
      </>
    );
  }

};

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (credentials) => dispatch(userActions.userSignIn(credentials)),
});

export default connect(null, mapDispatchToProps)(UserLogin);