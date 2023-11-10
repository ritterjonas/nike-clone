import { useMemo } from 'react';
import { StoreLocation } from '../types/Stores.types';
import { useStores } from './useStores';
import { getDistance, parseCoordinates } from '@/utils/geolocation';

const filterByCoordinates = (
  stores: StoreLocation[],
  lat: number,
  lng: number
) => {
  const storesWithDistance = stores.map(store => ({
    ...store,
    distance: getDistance(lat, lng, +store.latitude, +store.longitude),
  }));

  storesWithDistance.sort((a, b) => a.distance - b.distance);
  return storesWithDistance.slice(0, 3);
};

const filterByTerm = (stores: StoreLocation[], term: string) => {
  return stores.filter(({ adress }) =>
    adress.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );
};

export const useStoresFiltered = (search: string) => {
  const { stores, error, loading } = useStores();

  const storesFiltered = useMemo(() => {
    if (!stores) {
      return undefined;
    }

    const coordinates = parseCoordinates(search);

    if (coordinates) {
      return filterByCoordinates(stores, coordinates.lat, coordinates.lng);
    }

    return filterByTerm(stores, search);
  }, [search, stores]);

  return { stores: storesFiltered, error, loading };
};
