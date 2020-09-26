import React from 'react';
import { connect } from 'react-redux';

import { Navbar } from './components/navbar';
import { ImagesGrid } from './components/images-grid';
import { ImageModal } from './components/image-modal';
import { GlobalStyles } from './components/styled';

function App({ imageModal }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ImagesGrid />
      {imageModal && <ImageModal />}
    </>
  );
}

const mapStateToProps = ({ images }) => images;

export default connect(mapStateToProps)(App);
