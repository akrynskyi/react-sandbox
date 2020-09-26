import React, { useRef } from 'react';
import { Button } from '../styled';

export const LoadMoreButton = ({ handle, loading }) => {
  const buttonRef = useRef(null);

  const onClick = () => {
    handle();
    setTimeout(() => {
      buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 1000);
  };

  return (
    <Button 
      shadow 
      load={loading}
      disabled={loading}
      ref={buttonRef}
      onClick={onClick}
    >
      {loading ? 'Loading...' : 'Load more'}
    </Button>
  );
};