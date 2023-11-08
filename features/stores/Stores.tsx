import TextField from "@/components/TextField/TextField";
import { Container, Title } from "./Stores.styles";
import { useState } from 'react';

export default function Stores() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Title>Lojas</Title>
      <TextField
        iconSrc="/images/icon_lupa.svg"
        placeholder="Busque por endereço ou CEP"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </Container>
  )
}
