import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '../components/navbar';
import { ImagesGrid } from '../components/images-grid';
import { ImageModal } from '../components/image-modal';

export const MainGallery = () => {
  const imageModal = useSelector(({ images }) => images.imageModal);

  return (
    <>
      <Navbar />
      <ImagesGrid />
      {imageModal && <ImageModal />}
    </>
  );
};