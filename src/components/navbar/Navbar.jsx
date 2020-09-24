import React from 'react';

import { 
  Nav, 
  FlexContainer, 
  Button, 
  Logo,
  Text,
} from '../styled';

export const Navbar = () => {
  return (
    <Nav>
      <FlexContainer 
        justify="space-between"
      >
        <Logo href="/">
          <span className="material-icons">camera</span>
          <Text>mycamerashoot</Text>
        </Logo>
        <Button>
          Sign-in
        </Button>
      </FlexContainer>
    </Nav>
  );
};