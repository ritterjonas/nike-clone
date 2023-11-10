import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { memo, useCallback, useEffect, useState } from 'react';

type MarkerType = {
  lat: number;
  lng: number;
};

type StoreItemProps = {
  markers: MarkerType[];
};

function Maps({ markers }: StoreItemProps) {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  });

  const fitBounds = useCallback(
    (map: any) => {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend(new google.maps.LatLng(marker.lat, marker.lng));
      });
      map.fitBounds(bounds);
    },
    [markers]
  );

  const onLoad = useCallback(
    (map: any) => {
      fitBounds(map);
      setMap(map);
    },
    [markers]
  );

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      fitBounds(map);
    }
  }, [map, markers, fitBounds]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map(marker => (
          <Marker
            position={marker}
            icon='/images/icon_pin_mapa.svg'
            key={marker.lat}
          />
        ))}
      </GoogleMap>
    )
  );
}

export default memo(Maps);
