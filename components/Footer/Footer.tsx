import Image from 'next/image';
import ReceiveNews from '../ReceiveNews/ReceiveNews';
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  FooterSection,
  LicenseContainer,
  LicenseSection,
  LicenseLink,
  LicenseText,
  Link,
  LinkTitle,
  PaymentIcons,
  SocialIcons,
} from './Footer.styles';
import CollapsableSection from './CollapsableSection';

export default function Footer() {
  const socialNames = ['facebook', 'instagram', 'youtube'];
  const paymentNames = [
    'Mastercard',
    'Visa',
    'Amex',
    'Elo',
    'Hipercard',
    'Discover',
    'Boleto',
  ];

  return (
    <footer data-testid='footer'>
      <ReceiveNews />
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <LinkTitle href='#'>Encontre Uma Loja Nike</LinkTitle>
            <LinkTitle href='#'>Cadastre-se para receber novidades</LinkTitle>
            <LinkTitle href='#'>Mapa do site</LinkTitle>
          </FooterSection>
          <CollapsableSection title='Ajuda'>
            <FooterLinks>
              <Link href='#'>Dúvidas Gerais</Link>
              <Link href='#'>Encontre seu Tamanho</Link>
              <Link href='#'>Entregas</Link>
              <Link href='#'>Pedidos</Link>
              <Link href='#'>Trocas e Devoluções</Link>
              <Link href='#'>Editar consentimento</Link>
              <Link href='#'>Preferências de Cookie</Link>
              <Link href='#'>Pagamentos</Link>
              <Link href='#'>Produtos</Link>
              <Link href='#'>Corporativo</Link>
              <Link href='#'>Fale Conosco</Link>
            </FooterLinks>
          </CollapsableSection>
          <CollapsableSection title='Sobre a nike'>
            <FooterLinks>
              <Link href='#'>Feito para Jogar</Link>
              <Link href='#'>Sustentabilidade</Link>
            </FooterLinks>
          </CollapsableSection>
          <FooterSection>
            <LinkTitle>Redes sociais</LinkTitle>

            <SocialIcons>
              {socialNames.map(name => (
                <Image
                  src={`/images/logo_redes_sociais_${name}.svg`}
                  alt={`${name} logo`}
                  width={32}
                  height={32}
                  key={name}
                />
              ))}
            </SocialIcons>

            <LinkTitle>Formas de pagamento</LinkTitle>

            <PaymentIcons>
              {paymentNames.map(name => (
                <Image
                  src={`/images/pgto_${name}.svg`}
                  alt={`${name} logo`}
                  width={48}
                  height={36}
                  key={name}
                />
              ))}
            </PaymentIcons>
          </FooterSection>
        </FooterContent>
        <LicenseContainer>
          <LicenseSection>
            <LicenseLink>Brasil</LicenseLink>
            <LicenseLink href='#'>Política de Privacidade</LicenseLink>
            <LicenseLink href='#'>Termos de Uso</LicenseLink>
          </LicenseSection>
          <LicenseSection>
            <LicenseText>
              <p>
                © 2021 Nike. Todos os direitos reservados. Fisia Comércio de
                Produtos Esportivos
              </p>
              <p>
                Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues
                Agostinho, 1370 -
              </p>
              <p>
                Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das
                Artes/SP.
              </p>
            </LicenseText>
          </LicenseSection>
        </LicenseContainer>
      </FooterContainer>
    </footer>
  );
}
