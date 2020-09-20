import styled from 'styled-components';

export const Button = styled.button`
  min-height: 40px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: inherit;
  width: ${({grow}) => grow ? '100%' : 'auto'};
  background-color: ${({bgc}) => bgc ? bgc : '#000'};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

export const ButtonTransparent = styled(Button)`
  min-height: auto;
  background: transparent;
  padding: 0;
  color: #00b0ff;
  font-size: 14px;
  border-radius: 0;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #00b0ff;
  }
`;