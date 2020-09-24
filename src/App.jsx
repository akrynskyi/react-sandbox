import React from 'react';

import { Navbar } from './components/navbar';
import { ImagesGrid } from './components/images-grid';
import { GlobalStyles } from './components/styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ImagesGrid />
    </>
  );
}

export default App;
