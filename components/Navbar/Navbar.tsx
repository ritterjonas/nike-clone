import { NavbarContainer } from './Navbar.styles';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <NavbarContainer data-testid='navbar'>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </NavbarContainer>
  );
}
