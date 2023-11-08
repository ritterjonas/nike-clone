import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: relative;
  padding-bottom: 64px;
`;

export const NavbarComponent = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background-color: #FFF;
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;