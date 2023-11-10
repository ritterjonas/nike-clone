import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { useIsMobile } from '../../hooks/useIsMobile';

jest.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('<Navbar />', () => {
  it('renders NavbarMobile on mobile devices', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);

    render(<Navbar />);

    const navbarMobileElement = screen.getByTestId('navbar-mobile');
    const navbarDesktopElement = screen.queryByTestId('navbar-desktop');

    expect(navbarMobileElement).toBeInTheDocument();
    expect(navbarDesktopElement).toBeNull();
  });

  it('renders NavbarDesktop on non-mobile devices', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<Navbar />);

    const navbarDesktopElement = screen.getByTestId('navbar-desktop');
    const navbarMobileElement = screen.queryByTestId('navbar-mobile');

    expect(navbarDesktopElement).toBeInTheDocument();
    expect(navbarMobileElement).toBeNull();
  });
});
