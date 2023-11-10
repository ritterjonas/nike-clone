import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

type MarkerType = {
  lat: number;
  lng: number;
};

type StoreItemProps = {
  markers: MarkerType[];
};

function Maps({ markers }: StoreItemProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  });

  const onLoad = useCallback((map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(marker => {
      bounds.extend(new google.maps.LatLng(marker.lat, marker.lng));
    });
    map.fitBounds(bounds);
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        onLoad={onLoad}
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
