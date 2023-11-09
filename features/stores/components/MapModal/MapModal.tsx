import Image from 'next/image';
import { StoreLocation } from '../../types/Stores.types';
import { CloseButton, Header, MapContent, Modal } from './MapModal.styles';
import Maps from '@/components/Maps/Maps';

type StoreItemProps = {
  store: StoreLocation;
  close: () => void;
};

export default function MapModal({ store, close }: StoreItemProps) {
  return (
    <Modal data-testid='map-modal'>
      <Header>
        <CloseButton onClick={close} data-testid='close-button'>
          <Image
            src='/images/icon_close.svg'
            alt='Close Button'
            width={24}
            height={24}
          />
        </CloseButton>
      </Header>
      <MapContent data-testid='map-content'>
        <Maps lat={+store.latitude} lng={+store.longitude} zoom={16} />
      </MapContent>
    </Modal>
  );
}
