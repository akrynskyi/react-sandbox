import styled from 'styled-components';
import { textColor } from './vars';

export const Logo = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: ${textColor};
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: ${textColor};
  margin-left: ${({ml}) => ml ? ml : '5px'};
  margin-right: ${({mr}) => mr ? mr : '5px'};
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;