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
  margin-left: ${({ml}) => ml ? ml : '5px'};
  margin-right: ${({mr}) => mr ? mr : '5px'};
`;

export const ImageCard = styled.div`
  height: 100%;
  position: relative;
  grid-row: ${({gridRow}) => gridRow ? 'span ' + gridRow : 'auto'};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Element = styled.div`
  background-color: ${({bgc}) => bgc ? bgc : '#fff'};
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