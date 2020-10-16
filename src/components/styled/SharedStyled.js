import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { textColor, btnColor, dropdownBoxShadow } from './vars';

export const Logo = styled(Link)`
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

const backdropStyles = css`
  background-color: rgba(0, 0, 0, .6);
  backdrop-filter: blur(2px);
`;

export const Overlay = styled(motion.div)`
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
  ${({backdrop}) => backdrop && backdropStyles};
`;

export const Anchor = styled(Link)`
  color: ${btnColor};
`;

export const UserNav = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background .2s linear;

  &:hover {
    background-color: rgba(60,64,67,.08);
  }

  &:focus {
    background-color: rgba(60,64,67,.08);
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  user-select: none;
`;

export const Dropdown = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  width: 120px;
  right: 0;
  top: 115%;
  z-index: 10;
  border-radius: 6px;
  background: #fff;
  box-shadow: ${dropdownBoxShadow};
  transform-origin: top right;
`;

export const DropdownItem = styled(Link)`
  display: block;
  font-size: 16px;
  padding: 12px 15px;
  background: transparent;
  transition: background .2s linear;

  &:hover {
    background: #e0e0e0;
  }
`;