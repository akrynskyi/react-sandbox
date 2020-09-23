import React from 'react';

import { 
  Nav, 
  FlexContainer, 
  Button, 
  Logo 
} from '../styled';

export const Navbar = () => {
  return (
    <Nav>
      <FlexContainer 
        justify="space-between"
      >
        <Logo href="/">
          <span className="material-icons">landscape</span>
          <span style={{marginLeft: '5px'}}>Imager</span>
        </Logo>
        <Button>
          Sign-in
        </Button>
      </FlexContainer>
    </Nav>
  );
};