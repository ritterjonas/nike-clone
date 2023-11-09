import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Stores from './Stores';
import { useStores } from './hooks/useStores';
import { StoreLocation } from './types/Stores.types';

jest.mock('./hooks/useStores');

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

describe('<Stores />', () => {
  test('renders Stores component', () => {
    (useStores as jest.Mock).mockReturnValue({ stores: mockStores });

    render(<Stores />);
    expect(screen.getByText('Lojas')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.getByTestId('stores-list')).toBeInTheDocument();
  });
});
