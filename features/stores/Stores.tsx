import {
  Container,
  MapsContainer,
  StoresContainer,
  Title,
} from './Stores.styles';
import StoresList from './components/StoresList/StoresList';
import { useStoresWithDistance } from './hooks/useStoresWithDistance';
import StoreSearch from './components/StoreSearch/StoreSearch';
import { useIsMobile } from '@/hooks/useIsMobile';
import Maps from '@/components/Maps/Maps';

const user = {
  lat: -16.1236901710532,
  lng: -48.39933935435456,
};

export default function Stores() {
  const { stores } = useStoresWithDistance(user.lat, user.lng);
  const isMobile = useIsMobile();

  const search = (value: string) => {
    console.log(value);
  };

  return (
    <Container>
      <Title>Lojas</Title>
      <StoreSearch onSearch={search} />

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
