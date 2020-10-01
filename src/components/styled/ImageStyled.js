import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backdropLight } from './vars';

export const ImageCard = styled(motion.div)`
  height: 100%;
  cursor: zoom-in;
  position: relative;
  grid-row: ${({gridRow}) => gridRow ? 'span ' + gridRow : 'none'};
`;

export const ImageCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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