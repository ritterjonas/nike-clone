import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders without errors', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});

test('Footer contains "ENCONTRE UMA LOJA NIKE"', () => {
  render(<Footer />);
  const footerTextElement = screen.getByText('ENCONTRE UMA LOJA NIKE');
  expect(footerTextElement).toBeInTheDocument();
});
