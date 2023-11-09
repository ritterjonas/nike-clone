import { Container } from './StoresList.styles';
import { StoreLocation } from '../../types/Stores.types';
import StoreItem from '../StoreItem/StoreItem';

type StoresListProps = {
  stores: StoreLocation[];
};

export default function StoresList({ stores }: StoresListProps) {
  return (
    <Container data-testid='stores-list'>
      <p>Menor distância</p>
      {stores.map(store => (
        <StoreItem key={store.number} store={store} />
      ))}
    </Container>
  );
}
