import styled, { css } from 'styled-components';
import { Overlay, ButtonIcon, FlexContainer, ImageCard } from '.';
import * as vars from './vars';

const shared = css`
  padding: 20px 25px;
`;

export const ModalBackdrop = styled(Overlay)`
  display: block;
  overflow: auto;
  cursor: zoom-out;
  pointer-events: all;
  background-color: rgba(0, 0, 0, .6);
`;

export const ModalLayout = styled(FlexContainer)`
  position: relative;
  justify-content: center;
  max-width: calc(100% - 200px);

  @media(max-width: 900px) {
    max-width: 100%;
  }
`;

export const Modal = styled.div`
  cursor: auto;
  height: 100%;
  margin-top: 37px;
  margin-bottom: 37px;
  width: calc(100% - 20px);
`;

export const ModalContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: ${vars.cardBoxShadow};
  border-radius: ${vars.cardBorderRadius};
`;

export const ModalHeader = styled.div`
  ${shared}
  position: sticky;
  top: 0px;
  z-index: 25;
  background-color: #fff;
  border-top-left-radius: ${vars.cardBorderRadius};
  border-top-right-radius: ${vars.cardBorderRadius};
`;

export const ModalFooter = styled.div`
  ${shared}
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const ModalControl = styled(ButtonIcon)`
  position: absolute;
  ${({left}) => left && 'left: -60px;'};
  ${({right}) => right && 'right: -60px;'};
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .25);
`;

export const ModalImageCard = styled(ImageCard)`
  height: auto;
  cursor: auto;
`;