import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MapModal from './MapModal';
import { StoreLocation } from '../../types/Stores.types';

const mockStore: StoreLocation = {
  name: 'Store 1',
  number: 123,
  latitude: '-22.912607',
  longitude: '-47.054530',
  adress: 'Rua das Flores, 123 - Centro, Rio Claro - SP, 13500-000',
};

describe('<MapModal />', () => {
  test('render MapModal with close button', () => {
    const closeMock = jest.fn();

    render(<MapModal store={mockStore} close={closeMock} />);

    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();

    const map = screen.getByTestId('map-content');
    expect(map).toBeInTheDocument();
  });

  test('calls the close function when close button is clicked', () => {
    const closeMock = jest.fn();

    render(<MapModal store={mockStore} close={closeMock} />);

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(closeMock).toHaveBeenCalled();
  });
});
