import Image from 'next/image';
import { NavbarComponent, NavbarIcons } from './Navbar.styles';

export default function NavbarMobile() {
  return (
    <NavbarComponent>
      <Image
        src="/images/logo_nike.svg"
        alt="Nike Logo"
        width={40}
        height={15}
        data-testid="nike-logo-mobile"
      />

      <NavbarIcons>
        <Image
          src="/images/icon_sacola.svg"
          alt="Hamburguer Icon"
          width={20}
          height={20}
          />
        <Image
          src="/images/icon_hamburguer.svg"
          alt="Hamburguer Icon"
          width={24}
          height={24}
          />
      </NavbarIcons>
    </NavbarComponent>
  )
}