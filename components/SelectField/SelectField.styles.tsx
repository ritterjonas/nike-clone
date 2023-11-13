import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  padding: ${spacing.layout8} 0;
`;

export const SelectBox = styled.div`
  font-size: ${font.size14};
  display: flex;
  gap: ${spacing.layout16};
  align-items: center;
  cursor: pointer;
`;

export const SelectPopover = styled.div`
  position: absolute;
  background: ${colors.neutral100};
  border-radius: ${border.radius8};
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  margin-top: ${spacing.layout16};
  z-index: 301;
`;

export const SelectOverlay = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 300;
`;

export const SelectItem = styled.div`
  padding: ${spacing.layout20} ${spacing.layout16};
  font-size: ${font.size12};
  cursor: pointer;
  border-radius: ${border.radius8};

  &:hover {
    background: ${colors.neutral200};
  }
`;
