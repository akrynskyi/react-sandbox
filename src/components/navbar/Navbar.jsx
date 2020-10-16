import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/user-state';

import { 
  Nav, 
  FlexContainer, 
  ButtonLink, 
  Logo,
  Text,
  UserNav,
  Avatar,
  Dropdown,
  DropdownItem
} from '../styled';

const dropdownAmimation = {
  hidden: {
    transform: 'scale(0)',
  },
  visible: {
    transform: 'scale(1)',
  }
};

export const Navbar = () => {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  const user = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();

  const [dropdownVisidle, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible((state) => !state);

  const logout = () => dispatch(userActions.userLogOut());

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
              <Avatar onClick={toggleDropdown}>
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
              {
                dropdownVisidle
                && (
                  <Dropdown
                    variants={dropdownAmimation}
                    initial="hidden"
                    animate="visible"
                  >
                    <DropdownItem to="/">
                      Profile
                    </DropdownItem>
                    <DropdownItem 
                      to="/"
                      onClick={logout}
                    >
                      Logout
                    </DropdownItem>
                  </Dropdown>
                )
              }
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