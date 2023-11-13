import { colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const NavbarComponent = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: ${colors.neutral100};
  min-height: 66px;
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.layout32};
`;

export const NavbarIcon = styled.a`
  cursor: pointer;
`;

export const DrawerContainer = styled.div``;

export const Drawer = styled.aside`
  overflow-y: auto;
  background: ${colors.neutral100};
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 401;
  right: 0px;
  padding: 16px 24px;
  box-sizing: border-box;
`;

export const DrawerItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.neutral700};
  padding: 24px 0;
  font-size: ${font.size20};
  font-weight: 500;
`;

export const Overlay = styled.div`
  background: ${colors.neutral700};
  opacity: 0.7;
  position: fixed;
  inset: 0px;
  z-index: 400;
`;
