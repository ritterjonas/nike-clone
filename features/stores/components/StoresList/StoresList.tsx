import { Container } from './StoresList.styles';
import { StoreLocation } from '../../types/Stores.types';
import StoreItem from '../StoreItem/StoreItem';
import SelectField from '@/components/SelectField/SelectField';

type StoresListProps = {
  stores: StoreLocation[];
  order: string;
  changeOrder: (order: string) => void;
};

export default function StoresList({
  stores,
  order,
  changeOrder,
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
        <StoreItem key={store.number} store={store} />
      ))}
    </Container>
  );
}
