import TextField from '@/components/TextField/TextField';
import { Container, Title } from './Stores.styles';
import { useState } from 'react';
import { useStores } from './hooks/useStores';
import StoresList from './components/StoresList/StoresList';

export default function Stores() {
  const [search, setSearch] = useState('');
  const { stores } = useStores();

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
