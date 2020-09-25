import React from 'react';
import 'loaders.css/loaders.css';
import { Overlay } from '../styled';

export const Loader = () => {
  const elements = new Array(8).fill({ backgroundColor: '#1e88e5' });

  return (
    <Overlay>
      <div className="ball-spin-fade-loader">
        {
          elements.map(({ backgroundColor }, index) => (
            <div
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))
        }
      </div>
    </Overlay>
  );
};
