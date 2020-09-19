import styled from 'styled-components';

export const Divider = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 15px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    z-index: 1;
    background-color: #ccc;
    margin-top: 1px;
  }
`;

export const DividerText = styled.span`
  position: relative;
  font-size: 12px;
  padding: 0px 8px;
  background-color: #fff;
  color: #424242;
  z-index: 2;
`;