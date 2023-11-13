import styled from 'styled-components';

export const NewsContainer = styled.div`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.neutral200};
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
  gap: 24px;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const ArrowButton = styled.div`
  border-radius: 12px;
  height: 24px;
  width: 24px;
  background-color: ${props => props.theme.colors.neutral100};
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
  font-size: ${props => props.theme.font.size12};
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.neutral700};
`;
