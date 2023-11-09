import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe('<StoresList />', () => {
  it('should render correctly', () => {
    render(<StoresList stores={mockStores} />);

    expect(screen.getByText('Menor distância')).toBeInTheDocument();

    expect(screen.getAllByTestId('store-item')).toHaveLength(2);
  });
});
