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
import Maps from '@/components/Maps/Maps';
import { useState } from 'react';

const user = {
  lat: -16.1236901710532,
  lng: -48.39933935435456,
};

export default function Stores() {
  const [search, setSearch] = useState('');
  const { stores } = useStoresFiltered(search);
  const isMobile = useIsMobile();

  return (
    <Container>
      <Title>Lojas</Title>
      <StoreSearch onSearch={setSearch} />

      {stores && (
        <StoresContainer>
          <StoresList stores={stores} />
          {!isMobile && (
            <MapsContainer>
              <Maps
                markers={stores.map(store => ({
                  lat: +store.latitude,
                  lng: +store.longitude,
                }))}
              />
            </MapsContainer>
          )}
        </StoresContainer>
      )}
    </Container>
  );
}
