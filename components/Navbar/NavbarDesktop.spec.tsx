import React from 'react';
import { render } from '@testing-library/react';
import NavbarDesktop from './NavbarDesktop';

describe('<NavbarDesktop />', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<NavbarDesktop />);
    expect(asFragment()).toMatchSnapshot();
  });
});
