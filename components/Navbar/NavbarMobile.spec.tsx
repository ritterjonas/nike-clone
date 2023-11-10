import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavbarMobile from './NavbarMobile';

describe('<NavbarMobile />', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<NavbarMobile />);
    expect(asFragment()).toMatchSnapshot();
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
