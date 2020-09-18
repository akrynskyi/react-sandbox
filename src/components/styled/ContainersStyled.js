import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 20px;
  min-height: ${({ minheight }) => minheight ? minheight : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
`;