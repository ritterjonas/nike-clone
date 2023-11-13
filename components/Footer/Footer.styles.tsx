import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.neutral700};
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
  border-bottom: 1px solid ${props => props.theme.colors.neutral600};

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
  color: ${props => props.theme.colors.neutral100};
  font-size: ${props => props.theme.font.size16};
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.neutral200};
  font-size: ${props => props.theme.font.size12};
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
  color: ${props => props.theme.colors.neutral200};
  text-decoration: none;
  font-size: ${props => props.theme.font.size12};
`;

export const LicenseText = styled.div`
  color: ${props => props.theme.colors.neutral300};
  text-decoration: none;
  text-align: right;
  font-size: ${props => props.theme.font.size12};
  line-height: 150%;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;
