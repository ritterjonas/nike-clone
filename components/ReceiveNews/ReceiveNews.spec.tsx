import React from 'react';
import { render, screen } from '@testing-library/react';
import ReceiveNews from './ReceiveNews';

describe('ReceiveNews Component', () => {
  test('renders Nike logo', () => {
    render(<ReceiveNews />);
    const nikeLogo = screen.getByTestId('receive-news-nike-logo');
    expect(nikeLogo).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<ReceiveNews />);
    const title = screen.getByText('RECEBA AS NOVIDADES DA NIKE');
    expect(title).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<ReceiveNews />);
    const subtitle = screen.getByText('Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.');
    expect(subtitle).toBeInTheDocument();
  });

  test('renders button', () => {
    render(<ReceiveNews />);
    const cadastreSeButton = screen.getByText('Cadastre-se');
    expect(cadastreSeButton).toBeInTheDocument();
  });
});
