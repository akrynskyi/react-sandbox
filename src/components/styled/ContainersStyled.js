import styled from 'styled-components';
import { navHeight } from './vars';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 20px;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  grid-auto-flow: dense;
  width: 100%;
  align-items: stretch;
  padding: 40px 25px;
`;

export const LayoutContent = styled(Container)`
  padding: ${navHeight} 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  padding-top: ${({pt}) => pt ? pt : '15px'};
  padding-bottom: ${({pb}) => pb ? pb : '15px'};
`;