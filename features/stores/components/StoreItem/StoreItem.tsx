import {
  Address,
  Card,
  Container,
  Disponibility,
  Distance,
  Header,
  Info,
  SeeMap,
  SeeMapText,
  StoreName,
} from './StoreItem.styles';
import { StoreLocation } from '../../types/Stores.types';
import Image from 'next/image';

type StoreItemProps = {
  store: StoreLocation;
};

export default function StoreItem({ store }: StoreItemProps) {
  const getDistance = () => {
    if (!store.distance) {
      return '-';
    }

    const distance = store.distance.toFixed(1);
    return `${distance.replace('.', ',')} km`;
  };

  return (
    <Container data-testid='store-item'>
      <Header>
        <StoreName>{store.name}</StoreName>
        <Distance>{getDistance()}</Distance>
      </Header>
      <SeeMap>
        <Image
          src='/images/icon_pin_link.svg'
          alt='Hamburguer Icon'
          width={16}
          height={20}
        />
        <SeeMapText>Ver no mapa</SeeMapText>
      </SeeMap>
      <Card>
        <Address>{store.adress}</Address>
        <div>
          <Info>Atendimento:</Info>
          <Info>Segunda a Sábado 10h às 22h | Domingo 11h às 20h</Info>
        </div>
        <Disponibility>Disponível em 4 dias úteis</Disponibility>
      </Card>
    </Container>
  );
}
