import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  padding-top: 16px;
  gap: 16px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  padding-bottom: 32px;
  border-bottom: 1px solid #4d4d4d;

  @media (max-width: 1023px) {
    grid-auto-flow: row;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const LinkTitle = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Link = styled.a`
  color: #f7f7f7;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-decoration: none;
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const LicenseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const LicenseSection = styled.div`
  display: flex;
  gap: 48px;
`;

export const LicenseLink = styled.a`
  color: #f7f7f7;
  text-decoration: none;
  font-size: 12px;
`;

export const LicenseText = styled.div`
  color: #d6d6d6;
  text-decoration: none;
  text-align: right;
  font-size: 12px;
  line-height: 150%;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;
