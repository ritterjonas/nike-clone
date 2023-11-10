import styled from 'styled-components';

export const NewsContainer = styled.div`
  padding: 8px 16px;
  background-color: #f7f7f7;
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
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background-color: #fff;
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
  font-size: 12px;
`;

export const Link = styled.a`
  color: #000;
`;
