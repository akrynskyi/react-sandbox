import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './components/styled';
import { GalleryPage, AuthPage } from './pages';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={GalleryPage} exact />
        <Route path="/:auth" component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
