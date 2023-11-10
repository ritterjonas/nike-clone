import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px 16px 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  border-radius: 8px;
  background: #f7f7f7;
  flex: 1 1 0px;

  @media (min-width: 1024px) {
    max-height: 600px;
    overflow-y: auto;
  }
`;
