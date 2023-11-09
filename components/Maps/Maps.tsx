import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

type StoreItemProps = {
  lat: number;
  lng: number;
  zoom: number;
};

function Maps({ lat, lng, zoom }: StoreItemProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map: any) => {
      map.setZoom(zoom);
    },
    [zoom]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        center={{ lat, lng }}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat, lng }} icon='/images/icon_pin_mapa.svg' />
      </GoogleMap>
    )
  );
}

export default memo(Maps);
