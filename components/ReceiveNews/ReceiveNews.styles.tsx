import { colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const ReceiveNewsContainer = styled.div`
  background-color: ${colors.neutral200};
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing.layout32};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.layout16};
`;

export const ReceiveNewsTitle = styled.h3`
  font-weight: 500;
  font-size: ${font.size18};
  color: ${colors.neutral700};
  line-height: 120%;
  text-align: center;
`;

export const ReceiveNewsSubtitle = styled.h4`
  font-size: ${font.size16};
  color: ${colors.neutral700};
  line-height: 150%;
  text-align: center;
`;
