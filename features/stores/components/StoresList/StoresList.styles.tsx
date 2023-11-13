import { border, colors, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: end;
  gap: ${spacing.layout32};
  border-radius: ${border.radius8};
  background: ${colors.neutral200};
  flex: 1 1 0px;
`;

export const ListItem = styled.div`
  width: 100%;
  cursor: pointer;
`;
