import styled from 'styled-components';
import { textColor, backdropLight } from './vars';

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

export const ImageCard = styled.div`
  cursor: zoom-in;
  height: 100%;
  position: relative;
  grid-row: ${({gridRow}) => gridRow ? 'span ' + gridRow : 'none'};
`;

export const ModalImageCard = styled(ImageCard)`
  height: auto;
  cursor: auto;
`;

export const ImageCardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
`;

export const ImageDetails = styled.span`
  color: #fff;
  font-size: 14px;
  padding: 5px 12px;
  border-radius: 2px;
  background-color: ${backdropLight};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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