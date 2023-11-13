import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const InputContainer = styled.div`
  background-color: ${colors.neutral100};
  border: 1px solid ${colors.neutral300};
  border-radius: ${border.radius50};
  padding: ${spacing.layout16};
  display: flex;
  align-items: center;
  gap: ${spacing.layout8};
  flex: 1;
`;

export const InputText = styled.input`
  color: ${colors.neutral500};
  border: none;
  outline: none;
  flex: 1;
  font-size: ${font.size16};
`;
