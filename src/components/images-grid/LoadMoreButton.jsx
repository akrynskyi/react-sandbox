import React, { useRef, useEffect } from 'react';
import { Button } from '../styled';

export const LoadMoreButton = ({ handle, loading, scroll, images, perPage }) => {
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   if (images.length <= perPage) return;

  //   if (scroll) {
  //     buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }, [scroll, images, perPage]);

  return (
    <Button 
      shadow 
      load={loading}
      disabled={loading}
      ref={buttonRef}
      onClick={handle}
    >
      {loading ? 'Loading...' : 'Load more'}
    </Button>
  );
};