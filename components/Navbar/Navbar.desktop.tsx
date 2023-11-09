import Image from 'next/image';
import { NavbarComponent, NavbarIcons } from './Navbar.styles';

export default function NavbarDesktop() {
  return (
    <NavbarComponent>
      <Image
        src='/images/logo_nike.svg'
        alt='Nike Logo'
        width={40}
        height={15}
        data-testid='nike-logo-desktop'
      />

      <NavbarIcons>
        <Image
          src='/images/icon_sacola.svg'
          alt='Hamburguer Icon'
          width={20}
          height={20}
        />
      </NavbarIcons>
    </NavbarComponent>
  );
}
