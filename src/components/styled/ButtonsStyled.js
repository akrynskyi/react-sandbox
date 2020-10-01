import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import * as vars from './vars';

const buttonSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const m = '-.64285714em';
const size = '1.28571429em';

const spinner = css`
  color: transparent;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: ${size};
    height: ${size};
    margin-top: ${m};
    margin-left: ${m};
    border-width: .2em;
    border-radius: 50%;
    border-style: solid;
    box-shadow: 0 0 0 1px transparent;
    animation: ${buttonSpin} .6s linear;
    animation-iteration-count: infinite;
    border-color: #fff transparent transparent;
    border-top-color: ${vars.textColor};
  }

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: ${size};
    height: ${size};
    margin-top: ${m};
    margin-left: ${m};
    border-radius: 50%;
    border: .2em solid rgba(0,0,0,.15);
  }
`;

const buttonBase = css`
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 8px;
  border-radius: 4px;
  color: ${vars.btnColor};

  &:disabled {
    background-color: #f1f3f4;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  ${buttonBase};
  background-color: ${({shadow}) => shadow ? '#fff' : vars.btnBgc};
  box-shadow: ${({shadow}) => shadow && vars.btnBoxShadow};
  ${({load}) => load && spinner}
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${vars.textColor};
`;

export const ButtonLink = styled(Link)`
  ${buttonBase};
  background-color: ${vars.btnBgc};
`;