import React from 'react';

import { AuthNav, Logo, Text, FlexContainer } from '../styled';

export const AuthNavbar = () => {
  return (
    <AuthNav>
      <FlexContainer>
        <Logo to="/">
          <span className="material-icons">camera</span>
          <Text>mycamerashoot</Text>
        </Logo>
      </FlexContainer>
    </AuthNav>
  );
};