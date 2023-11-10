import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StoresContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 32px;
`;

export const MapsContainer = styled.div`
  flex: 1 1 0px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
`;
