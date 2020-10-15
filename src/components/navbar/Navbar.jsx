import React from 'react';
import { useSelector } from 'react-redux';

import { 
  Nav, 
  FlexContainer, 
  ButtonLink, 
  Logo,
  Text,
  UserNav,
  Avatar
} from '../styled';

export const Navbar = () => {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  const user = useSelector(({ user }) => user.user);

  return (
    <Nav>
      <FlexContainer 
        justify="space-between"
      >
        <Logo to="/">
          <span className="material-icons">camera</span>
          <Text>mycamerashoot</Text>
        </Logo>
        {
          isAuthenticated
          ? (
            <UserNav>
              <Avatar>
                {user.username.charAt(0)}
              </Avatar>
            </UserNav>
          )
          : (
            <ButtonLink to="/login">
              Log-in
            </ButtonLink>
          )
        }
      </FlexContainer>
    </Nav>
  );
};