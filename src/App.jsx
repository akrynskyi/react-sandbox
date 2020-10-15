import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from './store/user-state';

import { GlobalStyles } from './components/styled';
import { GalleryPage, AuthPage } from './pages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.userDataLoad());
  }, [dispatch]);

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
