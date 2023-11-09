import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoreItem from './StoreItem';
import { StoreLocation } from '../../types/Stores.types';

const store: StoreLocation = {
  name: 'Loja 1',
  number: 1,
  latitude: '-22.4116',
  longitude: '-47.5615',
  adress: 'Rua 1, 123, Centro, Rio Claro - SP',
  distance: 1.312,
};

describe('<StoreItem />', () => {
  test('renders StoreItem component', () => {
    render(<StoreItem store={store} />);

    const storeName = screen.getByText('Loja 1');
    const distance = screen.getByText('1,3 km');
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

  test('opens and closes the map modal', () => {
    render(<StoreItem store={store} />);

    expect(screen.queryByTestId('map-modal')).not.toBeInTheDocument();

    const seeMapButton = screen.getByText('Ver no mapa');
    fireEvent.click(seeMapButton);

    const mapModal = screen.getByTestId('map-modal');
    expect(mapModal).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('map-modal')).not.toBeInTheDocument();
  });
});
