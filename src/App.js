import React, { Component } from 'react';

import { LoginForm } from './components/login-form';
import { RegisterForm } from './components/register-form';
import { GlobalStyles, Container } from './components/styled';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      register: false,
    };
  }

  toggleForm = () => this.setState(({register}) => ({register: !register}));

  render() {
    const { register } = this.state;
    
    return (
      <>
        <GlobalStyles />
        <Container minheight="100vh" column>
          {
            register
            ? <RegisterForm toggleForm={this.toggleForm} />
            : <LoginForm toggleForm={this.toggleForm} />
          }
        </Container>
      </>
    );
  }

}

export default App;
