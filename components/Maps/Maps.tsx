import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { memo, useCallback, useEffect, useState } from 'react';

export type MarkerType = {
  lat: number;
  lng: number;
};

type StoreItemProps = {
  markers: MarkerType[];
  activeMarker?: MarkerType;
  setActiveMarker?: (marker: MarkerType) => void;
};

function Maps({ markers, activeMarker, setActiveMarker }: StoreItemProps) {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  });

  const fitBounds = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(marker => {
      bounds.extend(new google.maps.LatLng(marker.lat, marker.lng));
    });
    map.fitBounds(bounds);

    setTimeout(() => {
      if (map.getZoom() > 16) {
        map.setZoom(16);
      }
    }, 100);
  };

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
        {markers.map(marker => {
          const active =
            activeMarker?.lat === marker.lat &&
            activeMarker?.lng === marker.lng;
          return (
            <Marker
              position={marker}
              icon={`/images/icon_pin_mapa${active ? '_active' : ''}.svg`}
              key={marker.lat}
              onClick={() => setActiveMarker && setActiveMarker(marker)}
              zIndex={active ? 2 : 1}
            />
          );
        })}
      </GoogleMap>
    )
  );
}

export default memo(Maps);
