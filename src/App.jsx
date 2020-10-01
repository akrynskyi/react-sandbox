import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './components/styled';
import { MainGallery } from './pages';
import { userLogin, userRegister } from './components/auth';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={MainGallery} exact />
        <Route path="/login" component={userLogin} />
        <Route path="/register" component={userRegister} />
      </Switch>
    </>
  );
}

export default App;
