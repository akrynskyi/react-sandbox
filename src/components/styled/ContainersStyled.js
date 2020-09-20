import styled from 'styled-components';
import { formWidth } from './vars';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 20px;
  min-height: ${({ minheight }) => minheight ? minheight : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({column}) => column ? 'column' : 'row'};
`;

export const Box = styled.div`
  margin-top: ${({mt}) => mt ? mt : 'unset'};
  margin-bottom: ${({mb}) => mb ? mb : 'unset'};
  width: ${({w}) => w ? w : formWidth};
`;