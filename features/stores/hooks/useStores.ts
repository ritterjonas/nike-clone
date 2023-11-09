import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStores = () => {
  const [stores, setStores] = useState();
  const [error, setError] = useState();
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
