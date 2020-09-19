import React, { Component } from 'react';

import { LoginForm } from './components/login-form';
import { RegisterForm } from './components/register-form';
import { GlobalStyles, Container } from './components/styled';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Container minheight="100vh" column>
          <LoginForm />
        </Container>
      </>
    );
  }

}

export default App;
