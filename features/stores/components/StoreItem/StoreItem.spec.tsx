import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import StoreItem from './StoreItem';
import { StoreLocation } from '../../types/Stores.types';
import { useIsMobile } from '../../../../hooks/useIsMobile';

jest.mock('../../../../hooks/useIsMobile');

const store: StoreLocation = {
  name: 'Loja 1',
  number: 1,
  latitude: '-22.4116',
  longitude: '-47.5615',
  adress: 'Rua 1, 123, Centro, Rio Claro - SP',
  distance: 1.312,
};

describe('<StoreItem />', () => {
  it('renders the StoreItem component with store details', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<StoreItem store={store} />);

    expect(screen.getByTestId('store-item')).toBeInTheDocument();

    const storeName = screen.getByText('Loja 1');
    expect(storeName).toBeInTheDocument();

    const distance = screen.getByText('1,3 km');
    expect(distance).toBeInTheDocument();

    const address = screen.getByText('Rua 1, 123, Centro, Rio Claro - SP');
    expect(address).toBeInTheDocument();

    const openMapButton = screen.getByText('Ver no mapa');
    expect(openMapButton).toBeInTheDocument();
  });

  it('does not render the "Ver no mapa" button on larger screens', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
    render(<StoreItem store={store} />);

    const openMapButton = screen.queryByText('Ver no mapa');
    expect(openMapButton).not.toBeInTheDocument();
  });

  it('opens the map modal when "Ver no mapa" button is clicked on mobile', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<StoreItem store={store} />);

    const openMapButton = screen.getByText('Ver no mapa');
    expect(openMapButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(openMapButton);
    });

    const mapModal = screen.getByTestId('map-modal');
    expect(mapModal).toBeInTheDocument();
  });
});
