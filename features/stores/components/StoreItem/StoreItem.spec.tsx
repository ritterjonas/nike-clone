import React from 'react';
import { render, screen } from '@testing-library/react';
import StoreItem from './StoreItem';

const store = {
  name: 'Loja 1',
  number: 1,
  latitude: '-22.4116',
  longitude: '-47.5615',
  adress: 'Rua 1, 123, Centro, Rio Claro - SP',
};

test('renders StoreItem component', () => {
  render(<StoreItem store={store} />);

  const storeName = screen.getByText('Loja 1');
  const distance = screen.getByText('1km');
  const seeMap = screen.getByText('Ver no mapa');
  const address = screen.getByText('Rua 1, 123, Centro, Rio Claro - SP');
  const info = screen.getByText('Atendimento:');
  const disponibility = screen.getByText('Disponível em 4 dias úteis');

  expect(storeName).toBeInTheDocument();
  expect(distance).toBeInTheDocument();
  expect(seeMap).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(info).toBeInTheDocument();
  expect(disponibility).toBeInTheDocument();
});
