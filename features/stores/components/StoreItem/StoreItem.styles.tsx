import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreName = styled.h2`
  color: ${props => props.theme.colors.neutral700};
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
  flex: 1;
`;

export const Distance = styled.h3`
  color: ${props => props.theme.colors.neutral700};
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-align: right;
`;

export const SeeMap = styled.button`
  margin-top: 8px;
  padding: 0;
  display: flex;
  gap: 8px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const SeeMapText = styled.p`
  color: ${props => props.theme.colors.neutral700};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;
`;

export const Card = styled.div`
  display: flex;
  margin-top: 16px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: ${props => props.theme.colors.neutral100};
`;

export const Address = styled.p`
  color: ${props => props.theme.colors.neutral500};
  font-size: 14px;
  line-height: 150%;
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.neutral500};
  font-size: 12px;
  line-height: 150%;
`;

export const Disponibility = styled.p`
  color: ${props => props.theme.colors.success300};
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
`;
