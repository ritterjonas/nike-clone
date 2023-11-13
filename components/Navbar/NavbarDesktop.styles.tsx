import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const NavbarComponentDesktop = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 56px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.neutral100};
  min-height: 72px;
  padding: 0 40px;
`;

export const NavbarAccount = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  background: ${colors.neutral200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
`;

export const NavbarAccountImages = styled.div`
  display: flex;
  gap: ${spacing.layout20};
`;

export const NavbarAccountItems = styled.div`
  display: flex;
  gap: ${spacing.layout16};
  align-items: center;
`;

export const NavbarAccountItem = styled.a`
  color: ${colors.neutral500};
  font-size: ${font.size12};
  text-decoration: none;
`;

export const NavbarAccountSeparator = styled.div`
  height: 16px;
  width: 1px;
  background: ${colors.neutral500};
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.layout32};
`;

export const NavbarIcon = styled.a`
  cursor: pointer;
`;

export const NavbarMenus = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  padding: 22px 12px;
  cursor: pointer;
  border-bottom: 2px solid ${colors.neutral100};

  &:hover {
    border-color: ${colors.primary};
  }
`;

export const MenuItemLink = styled.a`
  color: ${colors.primary};
  font-size: ${font.size16};
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
`;

export const InputSearchContainer = styled.div`
  box-sizing: border-box;
  max-width: 170px;
  background-color: ${colors.neutral200};
  border-radius: ${border.radius50};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: ${spacing.layout8};
  flex: 1;

  &:hover {
    background: ${colors.neutral300};
  }
`;

export const InputText = styled.input`
  background: transparent;
  color: ${colors.neutral500};
  border: none;
  outline: none;
  flex: 1;
  font-size: ${font.size14};
  width: 100%;
`;
