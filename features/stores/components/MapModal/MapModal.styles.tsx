import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 101;
  display: flex;
  flex-direction: column;
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
  padding: 8px;
  cursor: pointer;
`;

export const MapContent = styled.div`
  flex: 1;
`;
