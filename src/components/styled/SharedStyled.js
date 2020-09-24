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
  grid-row: ${({gridRow}) => gridRow ? gridRow : 'auto'};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;