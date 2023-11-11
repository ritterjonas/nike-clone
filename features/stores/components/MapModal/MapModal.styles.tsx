import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  margin: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 401;
`;

export const ModalOverlay = styled.div`
  background: #111;
  opacity: 0.3;
  position: fixed;
  inset: 0px;
  z-index: 400;
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px 16px;
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 16px;
  cursor: pointer;
`;

export const MapContent = styled.div`
  flex: 1;
`;
