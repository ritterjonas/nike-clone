import { border, colors, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - ${spacing.layout40});
  height: calc(100vh - ${spacing.layout40});
  margin: ${spacing.layout20};
  background: ${colors.neutral100};
  display: flex;
  flex-direction: column;
  border-radius: ${border.radius8};
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 401;
`;

export const ModalOverlay = styled.div`
  background: ${colors.neutral700};
  opacity: 0.3;
  position: fixed;
  inset: 0px;
  z-index: 400;
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  padding: ${spacing.layout8} ${spacing.layout16};
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: ${spacing.layout16};
  cursor: pointer;
`;

export const MapContent = styled.div`
  flex: 1;
`;
