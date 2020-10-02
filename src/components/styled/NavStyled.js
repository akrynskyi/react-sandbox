import styled from 'styled-components';
import { navHeight } from './vars';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 10px 0px;
  height: ${navHeight};
  background-color: #fff;
  box-shadow: 1px 1px 8px rgba(0,0,0,.1);
`;

export const AuthNav = styled.nav`
  background-color: #DDDDDD;
  height: 105px;
  width: 100%;
  display: flex;
  align-items: center;
`;