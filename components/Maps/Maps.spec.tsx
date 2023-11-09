import React from 'react';
import { render, screen } from '@testing-library/react';
import Maps from './Maps';

jest.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({ isLoaded: true }),
  GoogleMap: () => (
    <div>
      <div data-testid='google-map'></div>
      <div data-testid='marker'></div>
    </div>
  ),
  Marker: () => <div data-testid='marker'></div>,
}));

describe('<Maps />', () => {
  test('renders the map correctly', () => {
    const lat = 37.7749; // Example coordinates
    const lng = -122.4194;
    const zoom = 10;

    render(<Maps lat={lat} lng={lng} zoom={zoom} />);

    const map = screen.getByTestId('google-map');
    expect(map).toBeInTheDocument();

    const marker = screen.getByTestId('marker');
    expect(marker).toBeInTheDocument();
  });
});
