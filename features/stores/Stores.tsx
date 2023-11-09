import { Container, Title } from './Stores.styles';
import StoresList from './components/StoresList/StoresList';
import { useStoresWithDistance } from './hooks/useStoresWithDistance';
import StoreSearch from './components/StoreSearch/StoreSearch';

const user = {
  lat: -23.541624,
  long: -46.629993,
};

export default function Stores() {
  const { stores } = useStoresWithDistance(user.lat, user.long);

  const search = (value: string) => {
    console.log(value);
  };

  return (
    <Container>
      <Title>Lojas</Title>
      <StoreSearch onSearch={search} />

      {stores && <StoresList stores={stores} />}
    </Container>
  );
}
