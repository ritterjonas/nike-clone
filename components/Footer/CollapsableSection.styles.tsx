import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.layout16};
`;

export const LinkTitle = styled.a`
  color: ${props => props.theme.colors.neutral100};
  font-size: ${props => props.theme.font.size16};
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
  font-size: ${props => props.theme.font.size14};
  text-transform: uppercase;
`;

export const CollapsableIcon = styled.div`
  color: ${props => props.theme.colors.neutral100};
  font-size: ${props => props.theme.font.size32};
  font-weight: 100;
  line-height: 14px;
`;

export const CollapsableContent = styled.div`
  padding: 0 16px;
`;
