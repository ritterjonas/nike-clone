import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar'; // Certifique-se de importar o componente corretamente

test('render Navbar component', () => {
  const { getByText } = render(<Navbar />);
  
  const navbarElement = getByText('navbar');
  expect(navbarElement).toBeInTheDocument();
});