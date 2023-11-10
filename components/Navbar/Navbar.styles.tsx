import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: relative;
  padding-bottom: 70px;
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
  padding: 0 16px;
  background-color: #fff;
  min-height: 70px;
`;

export const NavbarComponentDesktop = styled(NavbarComponent)`
  padding: 0 40px;
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
  border-bottom: 2px solid #fff;

  &:hover {
    border-color: #000;
  }
`;

export const MenuItemLink = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
`;

export const InputSearchContainer = styled.div`
  box-sizing: border-box;
  max-width: 170px;
  background-color: #f7f7f7;
  border-radius: 200px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;

  &:hover {
    background: #d6d6d6;
  }
`;

export const InputText = styled.input`
  background: transparent;
  color: #737373;
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  width: 100%;
`;

export const DrawerContainer = styled.div``;

export const Drawer = styled.aside`
  overflow-y: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 500;
  right: 0px;
  padding: 16px 24px;
  box-sizing: border-box;
`;

export const DrawerItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 24px 0;
  font-size: 20px;
  font-weight: 500;
`;

export const Overlay = styled.div`
  background: #111;
  opacity: 0.7;
  position: fixed;
  inset: 0px;
  z-index: 400;
`;
