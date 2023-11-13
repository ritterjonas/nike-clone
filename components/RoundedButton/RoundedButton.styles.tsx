import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const RoundedButton = styled.button`
  border-radius: ${border.radius50};
  background: ${colors.primary};
  display: flex;
  padding: ${spacing.layout16} ${spacing.layout24};
  justify-content: center;
  align-items: center;
  gap: ${spacing.layout8};
  color: white;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: ${font.size16};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
