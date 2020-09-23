import styled from 'styled-components';
import * as vars from './vars';

export const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 8px;
  border-radius: 4px;
  color: ${vars.btnColor};
  background-color: ${vars.btnBgc};
`;