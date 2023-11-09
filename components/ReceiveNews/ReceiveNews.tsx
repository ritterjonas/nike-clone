import Image from 'next/image';
import {
  ReceiveNewsContainer,
  ReceiveNewsSubtitle,
  ReceiveNewsTitle,
} from './ReceiveNews.styles';
import { RoundedButton } from '../RoundedButton/RoundedButton.styles';

export default function ReceiveNews() {
  return (
    <ReceiveNewsContainer>
      <Image
        src='/images/logo_nike.svg'
        alt='Nike logo'
        width={100}
        height={48}
        data-testid='receive-news-nike-logo'
      />
      <ReceiveNewsTitle>RECEBA AS NOVIDADES DA NIKE</ReceiveNewsTitle>
      <ReceiveNewsSubtitle>
        Cadastre-se e seja um dos primeiros a saber de todas as novidades e
        ofertas.
      </ReceiveNewsSubtitle>
      <RoundedButton>Cadastre-se</RoundedButton>
    </ReceiveNewsContainer>
  );
}
