import Image from 'next/image';
import {
  InputSearchContainer,
  InputText,
  MenuItem,
  MenuItemLink,
  NavbarComponentDesktop,
  NavbarAccount,
  NavbarAccountImages,
  NavbarAccountItems,
  NavbarAccountItem,
  NavbarAccountSeparator,
  NavbarIcon,
  NavbarIcons,
  NavbarMenus,
} from './NavbarDesktop.styles';

export default function NavbarDesktop() {
  return (
    <>
      <NavbarAccount>
        <NavbarAccountImages>
          <Image
            src='/images/logo_jordan.svg'
            alt='Nike Logo'
            width={24}
            height={24}
            data-testid='jordan-logo-desktop'
          />
          <Image
            src='/images/logo_snkrs.svg'
            alt='Nike Logo'
            width={48}
            height={24}
            data-testid='snkrs-logo-desktop'
          />
        </NavbarAccountImages>
        <NavbarAccountItems>
          <NavbarAccountItem href='#'>Ajuda</NavbarAccountItem>
          <NavbarAccountSeparator />
          <NavbarAccountItem href='#'>Acompanhe seu pedido</NavbarAccountItem>
          <NavbarAccountSeparator />
          <NavbarAccountItem href='#'>Junte-se a nós</NavbarAccountItem>
          <NavbarAccountSeparator />
          <NavbarAccountItem href='#'>Entrar</NavbarAccountItem>
        </NavbarAccountItems>
      </NavbarAccount>
      <NavbarComponentDesktop data-testid='navbar-desktop'>
        <Image
          src='/images/logo_nike.svg'
          alt='Nike Logo'
          width={40}
          height={15}
          data-testid='nike-logo-desktop'
        />

        <NavbarMenus>
          <MenuItem>
            <MenuItemLink href='#'>Lançamento</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href='#'>Masculino</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href='#'>Feminino</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href='#'>Infantil</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href='#'>Ofertas</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href='#'>SNKRS</MenuItemLink>
          </MenuItem>
        </NavbarMenus>

        <NavbarIcons>
          <InputSearchContainer>
            <Image
              src='/images/icon_lupa.svg'
              alt='Search icon'
              width={12}
              height={12}
            />
            <InputText type='text' placeholder='Buscar' />
          </InputSearchContainer>

          <NavbarIcon href='#'>
            <Image
              src='/images/icon_sacola.svg'
              alt='Bag Icon'
              width={20}
              height={20}
            />
          </NavbarIcon>
        </NavbarIcons>
      </NavbarComponentDesktop>
    </>
  );
}
