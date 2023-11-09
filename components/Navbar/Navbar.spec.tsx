import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar'; // Certifique-se de importar o componente corretamente

test('render Navbar component', () => {
  const { getByTestId } = render(<Navbar />);

  expect(getByTestId('nike-logo-desktop')).toBeInTheDocument();
  expect(getByTestId('nike-logo-mobile')).toBeInTheDocument();
});
