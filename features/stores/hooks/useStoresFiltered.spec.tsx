import { renderHook } from '@testing-library/react';
import { useStoresFiltered } from './useStoresFiltered';
import { useStores } from './useStores'; // Importe o hook useStores ou utilize um mock
import { StoreLocation } from '../types/Stores.types';

jest.mock('./useStores', () => ({
  useStores: jest.fn(),
}));

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
  it('filters stores by term when search is not coordinates', () => {
    (useStores as jest.Mock).mockReturnValue({
      stores,
      error: null,
      loading: false,
    });

    const { result } = renderHook(() => useStoresFiltered('Frutas'));

    expect(result.current.stores).toEqual([stores[1]]);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBeFalsy();
  });

  it('filters stores by coordinates when search is coordinates', () => {
    (useStores as jest.Mock).mockReturnValue({
      stores,
      error: null,
      loading: false,
    });

    const { result } = renderHook(() =>
      useStoresFiltered('-22.812607, -47.154530')
    );

    expect(result.current.stores).toEqual([
      {
        adress: 'Rua das Flores, 123 - Centro, Rio Claro - SP, 13500-000',
        distance: 14.142135623731154,
        latitude: '-22.912607',
        longitude: '-47.054530',
        name: 'Store 1',
        number: 123,
      },
      {
        adress: 'Rua das Frutas, 124 - Centro, Rio Claro - SP, 13501-000',
        distance: 14.362802651293565,
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

    const { result } = renderHook(() => useStoresFiltered('Address'));

    expect(result.current.stores).toBeUndefined();
    expect(result.current.error).toBe('Error message');
    expect(result.current.loading).toBeTruthy();
  });
});
