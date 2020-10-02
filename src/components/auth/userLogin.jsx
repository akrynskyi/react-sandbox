import React, { Component } from 'react';

import { FormContainer, FormControl, resetForm } from '../form';

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
    document.title = 'Log in | mycamerashoot'
  }

  onSubmit = (formValue) => {
    this.setState({ formValue, formSubmitted: true });
    console.log(formValue);

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
      <FormContainer
        formTitle={formTitle}
        formValid={formValid}
        formControls={formControls}
        buttonTitle={formTitle}
        onControlChange={this.onControlChange}
        onFormSubmit={this.onSubmit}
      />
    );
  }

};

export default UserLogin;