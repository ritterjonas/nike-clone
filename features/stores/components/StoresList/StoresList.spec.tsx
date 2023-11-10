import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoresList from './StoresList';
import { StoreLocation } from '../../types/Stores.types';

const mockStores: StoreLocation[] = [
  {
    name: 'Store 1',
    number: 123,
    latitude: '-22.912607',
    longitude: '-47.054530',
    adress: 'Rua das Flores, 123 - Centro, Rio Claro - SP, 13500-000',
  },
  {
    name: 'Store 2',
    number: 124,
    latitude: '-22.912707',
    longitude: '-47.051530',
    adress: 'Rua das Frutas, 124 - Centro, Rio Claro - SP, 13501-000',
  },
];
describe('StoresList Component', () => {
  it('renders the list of stores and the select field', () => {
    const mockChangeOrder = jest.fn();
    render(
      <StoresList
        stores={mockStores}
        order='shorter'
        changeOrder={mockChangeOrder}
      />
    );

    const storesListElement = screen.getByTestId('stores-list');
    expect(storesListElement).toBeInTheDocument();

    const selectFieldElement = screen.getByTestId('select-field');
    expect(selectFieldElement).toBeInTheDocument();

    const storeItemElements = screen.getByText('Menor distância');
    expect(storeItemElements).toBeInTheDocument();
  });
});
