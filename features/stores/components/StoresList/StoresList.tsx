import { Container, ListItem } from './StoresList.styles';
import { StoreLocation } from '../../types/Stores.types';
import StoreItem from '../StoreItem/StoreItem';
import SelectField from '@/components/SelectField/SelectField';
import { MarkerType } from '@/components/Maps/Maps';

type StoresListProps = {
  stores: StoreLocation[];
  order: string;
  changeOrder: (order: string) => void;
  activeMarker?: MarkerType;
  setActiveMarker?: (marker?: MarkerType) => void;
};

export default function StoresList({
  stores,
  order,
  changeOrder,
  activeMarker,
  setActiveMarker,
}: StoresListProps) {
  const selectOptions = [
    { value: 'shorter', text: 'Menor distância' },
    { value: 'longer', text: 'Maior distância' },
  ];

  return (
    <Container data-testid='stores-list'>
      <SelectField
        placeholder='Selecione'
        options={selectOptions}
        onChange={changeOrder}
        value={order}
      />
      {stores.map(store => (
        <ListItem
          onClick={() =>
            setActiveMarker &&
            setActiveMarker({ lat: +store.latitude, lng: +store.longitude })
          }
          key={store.number}
          style={
            activeMarker &&
            +store.latitude !== activeMarker.lat &&
            +store.longitude !== activeMarker.lng
              ? { opacity: 0.5 }
              : {}
          }
        >
          <StoreItem store={store} />
        </ListItem>
      ))}
    </Container>
  );
}
