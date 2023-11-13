import { font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${spacing.layout40} ${spacing.layout16};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.layout40};
`;

export const StoresContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: ${spacing.layout32};
`;

export const MapsContainer = styled.div`
  flex: 1 1 0px;
`;

export const Title = styled.h1`
  font-size: ${font.size32};
  font-weight: 500;
  line-height: 120%;
  text-align: center;
`;
