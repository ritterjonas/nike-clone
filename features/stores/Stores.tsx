import {
  Container,
  MapsContainer,
  StoresContainer,
  Title,
} from './Stores.styles';
import StoresList from './components/StoresList/StoresList';
import { useStoresFiltered } from './hooks/useStoresFiltered';
import StoreSearch from './components/StoreSearch/StoreSearch';
import { useIsMobile } from '@/hooks/useIsMobile';
import Maps, { MarkerType } from '@/components/Maps/Maps';
import { useEffect, useState } from 'react';

export default function Stores() {
  const [activeMarker, setActiveMarker] = useState<MarkerType | undefined>();
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('shorter');
  const { stores } = useStoresFiltered(search, order);
  const isMobile = useIsMobile();

  useEffect(() => {
    setActiveMarker(undefined);
  }, [search]);

  return (
    <Container>
      <Title>Lojas</Title>
      <StoreSearch onSearch={setSearch} />

      {stores && (
        <StoresContainer>
          <StoresList
            stores={stores}
            order={order}
            changeOrder={setOrder}
            activeMarker={activeMarker}
            setActiveMarker={marker => setActiveMarker(marker)}
          />
          {!isMobile && (
            <MapsContainer>
              <Maps
                markers={stores.map(store => ({
                  lat: +store.latitude,
                  lng: +store.longitude,
                }))}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
                key={search}
              />
            </MapsContainer>
          )}
        </StoresContainer>
      )}
    </Container>
  );
}
