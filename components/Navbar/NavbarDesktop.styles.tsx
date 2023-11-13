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
  background-color: ${props => props.theme.colors.neutral100};
  min-height: 72px;
  padding: 0 40px;
`;

export const NavbarAccount = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
  background: ${props => props.theme.colors.neutral200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
`;

export const NavbarAccountImages = styled.div`
  display: flex;
  gap: 18px;
`;

export const NavbarAccountItems = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const NavbarAccountItem = styled.a`
  color: ${props => props.theme.colors.neutral500};
  font-size: ${props => props.theme.font.size12};
  text-decoration: none;
`;

export const NavbarAccountSeparator = styled.div`
  height: 16px;
  width: 1px;
  background: ${props => props.theme.colors.neutral500};
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
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
  border-bottom: 2px solid ${props => props.theme.colors.neutral100};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.font.size16};
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
`;

export const InputSearchContainer = styled.div`
  box-sizing: border-box;
  max-width: 170px;
  background-color: ${props => props.theme.colors.neutral200};
  border-radius: ${props => props.theme.border.radius50};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;

  &:hover {
    background: ${props => props.theme.colors.neutral300};
  }
`;

export const InputText = styled.input`
  background: transparent;
  color: ${props => props.theme.colors.neutral500};
  border: none;
  outline: none;
  flex: 1;
  font-size: ${props => props.theme.font.size14};
  width: 100%;
`;
