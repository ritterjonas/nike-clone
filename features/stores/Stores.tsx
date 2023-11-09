import TextField from '@/components/TextField/TextField';
import { Container, Title } from './Stores.styles';
import { useState } from 'react';
import StoresList from './components/StoresList/StoresList';
import { useStoresWithDistance } from './hooks/useStoresWithDistance';

const user = {
  lat: -23.541624,
  long: -46.629993,
};

export default function Stores() {
  const [search, setSearch] = useState('');
  const { stores } = useStoresWithDistance(user.lat, user.long);

  return (
    <Container>
      <Title>Lojas</Title>
      <TextField
        iconSrc='/images/icon_lupa.svg'
        placeholder='Busque por endereço ou CEP'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {stores && <StoresList stores={stores} />}
    </Container>
  );
}
