import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarDesktop from './Navbar.desktop';

describe('NavbarDesktop Component', () => {
  it('renders the desktop navbar with Nike logo, menus, and icons', () => {
    render(<NavbarDesktop />);

    expect(screen.getByTestId('navbar-desktop')).toBeInTheDocument();
    expect(screen.getByTestId('nike-logo-desktop')).toBeInTheDocument();
    expect(screen.getByAltText('Search icon')).toBeInTheDocument();
    expect(screen.getByAltText('Bag Icon')).toBeInTheDocument();
    expect(screen.getByText('Lançamento')).toBeInTheDocument();
    expect(screen.getByText('Masculino')).toBeInTheDocument();
    expect(screen.getByText('Feminino')).toBeInTheDocument();
    expect(screen.getByText('Infantil')).toBeInTheDocument();
    expect(screen.getByText('Ofertas')).toBeInTheDocument();
    expect(screen.getByText('SNKRS')).toBeInTheDocument();
  });

  it('renders the search input correctly', () => {
    render(<NavbarDesktop />);

    const searchIcon = screen.getByAltText('Search icon');
    const searchInput = screen.getByPlaceholderText('Buscar');

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
