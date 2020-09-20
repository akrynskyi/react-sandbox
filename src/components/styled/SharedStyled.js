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

export const Text = styled.span`
  font-size: 14px;
  margin-right: 8px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};
  margin-top: ${({mt}) => mt ? mt : '30px'};
`;

export const PrintCode = styled.pre`
  color: #fdd835;
  padding: 15px;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 4px;
  background-color: #212121;
`;