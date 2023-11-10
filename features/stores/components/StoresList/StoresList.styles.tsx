import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: end;
  gap: 32px;
  border-radius: 8px;
  background: #f7f7f7;
  flex: 1 1 0px;

  @media (min-width: 1024px) {
    max-height: 600px;
    overflow-y: auto;
    align-items: start;
  }
`;
