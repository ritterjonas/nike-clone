import { StoreLocation } from '../types/Stores.types';
import { useStores } from './useStores';
import { getDistance } from '@/utils/geolocation';

export const useStoresWithDistance = (lat: number, long: number) => {
  const { stores, error, loading } = useStores();

  const storesWithDistance: StoreLocation[] | undefined = stores?.map(
    store => ({
      ...store,
      distance: getDistance(lat, long, +store.latitude, +store.longitude),
    })
  );

  return { stores: storesWithDistance, error, loading };
};
