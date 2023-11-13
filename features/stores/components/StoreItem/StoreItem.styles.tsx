import { border, colors, font, spacing } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreName = styled.h2`
  color: ${colors.neutral700};
  font-size: ${font.size24};
  font-weight: 500;
  line-height: 120%;
  flex: 1;
`;

export const Distance = styled.h3`
  color: ${colors.neutral700};
  font-size: ${font.size18};
  font-weight: 500;
  line-height: 120%;
  text-align: right;
`;

export const SeeMap = styled.button`
  margin-top: 8px;
  padding: 0;
  display: flex;
  gap: ${spacing.layout8};
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const SeeMapText = styled.p`
  color: ${colors.neutral700};
  font-size: ${font.size16};
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
  gap: ${spacing.layout8};
  border-radius: ${border.radius8};
  background: ${colors.neutral100};
`;

export const Address = styled.p`
  color: ${colors.neutral500};
  font-size: ${font.size14};
  line-height: 150%;
`;

export const Info = styled.p`
  color: ${colors.neutral500};
  font-size: ${font.size12};
  line-height: 150%;
`;

export const Disponibility = styled.p`
  color: ${colors.success300};
  font-size: ${font.size12};
  font-weight: 700;
  line-height: 150%;
`;
