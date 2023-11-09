import ReceiveNews from '../ReceiveNews/ReceiveNews';
import { FooterContainer } from './Footer.styles';

export default function Footer() {
  return (
    <footer data-testid='footer'>
      <ReceiveNews />
      <FooterContainer>ENCONTRE UMA LOJA NIKE</FooterContainer>
    </footer>
  );
}
