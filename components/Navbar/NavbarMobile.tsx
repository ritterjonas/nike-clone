import Image from 'next/image';
import {
  Drawer,
  DrawerContainer,
  DrawerItem,
  NavbarComponent,
  NavbarIcon,
  NavbarIcons,
  Overlay,
} from './NavbarMobile.styles';
import { useState } from 'react';

export default function NavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <NavbarComponent data-testid='navbar-mobile'>
        <Image
          src='/images/logo_nike.svg'
          alt='Nike Logo'
          width={40}
          height={15}
          data-testid='nike-logo-mobile'
        />

        <NavbarIcons>
          <NavbarIcon href='#'>
            <Image
              src='/images/icon_sacola.svg'
              alt='Bag Icon'
              width={20}
              height={20}
            />
          </NavbarIcon>
          <NavbarIcon href='#' onClick={() => setOpenDrawer(true)}>
            <Image
              src='/images/icon_hamburguer.svg'
              alt='Hamburguer Icon'
              width={24}
              height={24}
            />
          </NavbarIcon>
        </NavbarIcons>
      </NavbarComponent>

      {openDrawer && (
        <DrawerContainer>
          <Drawer data-testid='drawer'>
            <DrawerItem href='#'>Lançamento</DrawerItem>
            <DrawerItem href='#'>Masculino</DrawerItem>
            <DrawerItem href='#'>Feminino</DrawerItem>
            <DrawerItem href='#'>Infantil</DrawerItem>
            <DrawerItem href='#'>Ofertas</DrawerItem>
            <DrawerItem href='#'>SNKRS</DrawerItem>
          </Drawer>
          <Overlay
            onClick={() => setOpenDrawer(false)}
            data-testid='overlay'
          ></Overlay>
        </DrawerContainer>
      )}
    </>
  );
}
