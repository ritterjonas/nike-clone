import { useState, useEffect } from 'react';
import axios from 'axios';
import { StoreLocation } from '../types/Stores.types';

export const useStores = () => {
  const [stores, setStores] = useState<StoreLocation[]>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/stores');
      setStores(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { stores, error, loading };
};
