import { renderHook } from '@testing-library/react';
import { useStoresFiltered } from './useStoresFiltered';
import { useStores } from './useStores'; // Importe o hook useStores ou utilize um mock
import { StoreLocation } from '../types/Stores.types';
import { useUserLocation } from '../../../hooks/useUserLocation';

jest.mock('./useStores');
jest.mock('../../../hooks/useUserLocation');

const stores: StoreLocation[] = [
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

describe('useStoresFiltered Hook', () => {
  it('filters stores by term without user location', () => {
    (useStores as jest.Mock).mockReturnValue({
      stores,
      error: null,
      loading: false,
    });
    (useUserLocation as jest.Mock).mockReturnValue({
      location: null,
    });

    const { result } = renderHook(() => useStoresFiltered('Frutas', 'shorter'));

    expect(result.current.stores).toEqual([stores[1]]);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBeFalsy();
  });

  it('filters stores by term with user location', () => {
    (useStores as jest.Mock).mockReturnValue({
      stores,
      error: null,
      loading: false,
    });
    (useUserLocation as jest.Mock).mockReturnValue({
      location: {
        lat: -22.952757,
        lng: -47.02133,
      },
    });

    const { result } = renderHook(() => useStoresFiltered('Frutas', 'shorter'));

    expect(result.current.stores).toEqual([
      {
        adress: 'Rua das Frutas, 124 - Centro, Rio Claro - SP, 13501-000',
        distance: 5.016016846064036,
        latitude: '-22.912707',
        longitude: '-47.051530',
        name: 'Store 2',
        number: 124,
      },
    ]);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBeFalsy();
  });

  it('handles null stores', () => {
    (useStores as jest.Mock).mockReturnValue({
      stores: null,
      error: 'Error message',
      loading: true,
    });

    const { result } = renderHook(() =>
      useStoresFiltered('Address', 'shorter')
    );

    expect(result.current.stores).toBeNull();
    expect(result.current.error).toBe('Error message');
    expect(result.current.loading).toBeTruthy();
  });
});
