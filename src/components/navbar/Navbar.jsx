import React from 'react';

import { 
  Nav, 
  FlexContainer, 
  ButtonLink, 
  Logo,
  Text,
} from '../styled';

export const Navbar = () => {
  return (
    <Nav>
      <FlexContainer 
        justify="space-between"
      >
        <Logo to="/">
          <span className="material-icons">camera</span>
          <Text>mycamerashoot</Text>
        </Logo>
        <ButtonLink to="/login">
          Log-in
        </ButtonLink>
      </FlexContainer>
    </Nav>
  );
};