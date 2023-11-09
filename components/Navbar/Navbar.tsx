import { NavbarContainer } from './Navbar.styles';
import NavbarMobile from './Navbar.mobile';
import {
  OnlyDesktop,
  OnlyMobile,
} from '../AdaptiveLayout/AdaptiveLayout.styles';
import NavbarDesktop from './Navbar.desktop';

export default function Navbar() {
  return (
    <NavbarContainer data-testid='navbar'>
      <OnlyDesktop>
        <NavbarDesktop />
      </OnlyDesktop>

      <OnlyMobile>
        <NavbarMobile />
      </OnlyMobile>
    </NavbarContainer>
  );
}
