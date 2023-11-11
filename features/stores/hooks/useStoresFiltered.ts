import { useMemo } from 'react';
import { StoreLocation } from '../types/Stores.types';
import { useStores } from './useStores';
import { getDistance } from '@/utils/geolocation';
import { useUserLocation } from '../../../hooks/useUserLocation';
import { MarkerType } from '@/components/Maps/Maps';

const filterAndOrder = (
  stores: StoreLocation[],
  location: MarkerType,
  order: string
) => {
  const storesFiltered = stores.map(store => ({
    ...store,
    distance: getDistance(
      location.lat,
      location.lng,
      +store.latitude,
      +store.longitude
    ),
  }));

  if (order === 'shorter') {
    storesFiltered.sort((a, b) => a.distance - b.distance);
  }

  if (order === 'longer') {
    storesFiltered.sort((a, b) => b.distance - a.distance);
  }

  return storesFiltered;
};

const filterByTerm = (stores: StoreLocation[], term: string) => {
  return stores.filter(({ adress }) =>
    adress.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );
};

export const useStoresFiltered = (search: string, order: string) => {
  const { stores, error, loading } = useStores();
  const { location } = useUserLocation();

  const storesMemo = useMemo(() => {
    if (!stores) {
      return null;
    }

    let storesFiltered = filterByTerm(stores, search);

    if (location) {
      storesFiltered = filterAndOrder(storesFiltered, location, order);
    }

    return storesFiltered.slice(0, 3);
  }, [search, stores, order, location]);

  return { stores: storesMemo, error, loading };
};
