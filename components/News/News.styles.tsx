import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const NewsContainer = styled.div`
  padding: 8px 16px;
  background-color: ${colors.neutral200};
  position: relative;
  overflow: hidden;
`;

export const NewsContent = styled.div`
  position: relative;
  white-space: nowrap;
  transition-duration: 300ms;
`;

export const NewsItem = styled.div`
  display: inline-block;
  width: 100%;
`;

export const NewsItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.layout24};

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: ${spacing.layout4};
  }
`;

const ArrowButton = styled.div`
  border-radius: ${border.radius12};
  height: 24px;
  width: 24px;
  background-color: ${colors.neutral100};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: calc(50% - 12px);
`;

export const ArrowButtonLeft = styled(ArrowButton)`
  left: 40px;
`;

export const ArrowButtonRight = styled(ArrowButton)`
  right: 40px;
`;

export const Text = styled.span`
  font-size: ${font.size12};
`;

export const Link = styled.a`
  color: ${colors.neutral700};
`;
