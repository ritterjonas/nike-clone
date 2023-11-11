import { MarkerType } from '@/components/Maps/Maps';
import { useState, useEffect } from 'react';

export const useUserLocation = () => {
  const [location, setLocation] = useState<MarkerType>();
  const [error, setError] = useState('');

  useEffect(() => {
    const handleSuccess = (position: any) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const handleError = (error: any) => {
      setError('Error to get location');
    };

    const requestLocation = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({
          name: 'geolocation',
        });

        if (['granted', 'prompt'].includes(permissionStatus.state)) {
          navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        } else {
          setError('Permission denied to access location.');
        }
      } catch (error) {
        setError('Error checking location permission.');
      }
    };

    if (navigator.geolocation) {
      requestLocation();
    } else {
      setError('Geolocation not supported by the browser');
    }
  }, []);

  return { location, error };
};
