import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavbarMobile from './Navbar.mobile';

describe('<NavbarMobile />', () => {
  it('renders the mobile navbar with Nike logo and icons', () => {
    render(<NavbarMobile />);

    const navbarMobileElement = screen.getByTestId('navbar-mobile');
    const nikeLogo = screen.getByTestId('nike-logo-mobile');
    const sacolaIcon = screen.getByAltText('Hamburguer Icon');
    const hamburguerIcon = screen.getByAltText('Hamburguer Icon');

    expect(navbarMobileElement).toBeInTheDocument();
    expect(nikeLogo).toBeInTheDocument();
    expect(sacolaIcon).toBeInTheDocument();
    expect(hamburguerIcon).toBeInTheDocument();
  });

  it('opens the drawer when the hamburguer icon is clicked', () => {
    render(<NavbarMobile />);

    const hamburguerIcon = screen.getByAltText('Hamburguer Icon');
    fireEvent.click(hamburguerIcon);

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toBeInTheDocument();
  });

  it('closes the drawer when the overlay is clicked', () => {
    render(<NavbarMobile />);

    const hamburguerIcon = screen.getByAltText('Hamburguer Icon');
    fireEvent.click(hamburguerIcon);

    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);

    const drawer = screen.queryByTestId('drawer');
    expect(drawer).toBeNull();
  });
});
