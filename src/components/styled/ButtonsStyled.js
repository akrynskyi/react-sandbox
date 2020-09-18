import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: inherit;
  width: ${({grow}) => grow ? '100%' : 'auto'};
  background-color: ${({bgc}) => bgc ? bgc : '#000'};
`;