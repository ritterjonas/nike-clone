import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkTitle = styled.a`
  color: ${props => props.theme.colors.neutral100};
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
  padding-top: 24px;
`;

export const Collapsable = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.neutral100};
  border-top: 1px solid ${props => props.theme.colors.neutral100};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const CollapsableTitle = styled.div`
  color: ${props => props.theme.colors.neutral100};
  font-size: 14px;
  text-transform: uppercase;
`;

export const CollapsableIcon = styled.div`
  color: ${props => props.theme.colors.neutral100};
  font-size: 32px;
  font-weight: 100;
  line-height: 14px;
`;

export const CollapsableContent = styled.div`
  padding: 0 16px;
`;
