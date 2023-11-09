import { renderHook } from '@testing-library/react';
import { useStoresWithDistance } from './useStoresWithDistance';
import { useStores } from './useStores';
import { StoreLocation } from '../types/Stores.types';

jest.mock('./useStores');

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
const error = null;
const loading = false;

describe('useStoresWithDistance', () => {
  it('should return stores with distance from given coordinates', () => {
    (useStores as jest.Mock).mockReturnValue({ stores, error, loading });

    const {
      result: { current },
    } = renderHook(() => useStoresWithDistance(-23.562, -46.656));

    expect(current.error).toEqual(error);
    expect(current.loading).toEqual(loading);

    expect(current.stores?.[0]).toEqual(
      expect.objectContaining({ distance: 76.1930068542383 })
    );
    expect(current.stores?.[1]).toEqual(
      expect.objectContaining({ distance: 76.02798042490677 })
    );
  });
});
