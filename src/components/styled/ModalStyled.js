import styled, { css } from 'styled-components';
import { Overlay } from './SharedStyled';
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

export const Modal = styled.div`
  cursor: auto;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
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