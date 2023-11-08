import styled from 'styled-components';

export const NewsContainer = styled.div`
  padding: 8px 16px;
  background-color: #F7F7F7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const ArrowButton = styled.div`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
`;


export const Link = styled.a`
  color: #000;
`;
