import { colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.layout16};
`;

export const LinkTitle = styled.a`
  color: ${colors.neutral100};
  font-size: ${font.size16};
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
  padding-top: ${spacing.layout24};
`;

export const Collapsable = styled.div`
  padding: ${spacing.layout20} 0;
  border-bottom: 1px solid ${colors.neutral100};
  border-top: 1px solid ${colors.neutral100};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const CollapsableTitle = styled.div`
  color: ${colors.neutral100};
  font-size: ${font.size14};
  text-transform: uppercase;
`;

export const CollapsableIcon = styled.div`
  color: ${colors.neutral100};
  font-size: ${font.size32};
  font-weight: 100;
  line-height: 14px;
`;

export const CollapsableContent = styled.div`
  padding: 0 ${spacing.layout16};
`;
