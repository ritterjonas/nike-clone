import styled from 'styled-components';

export const ReceiveNewsContainer = styled.div`
  background-color: ${props => props.theme.colors.neutral200};
  width: 100%;
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ReceiveNewsTitle = styled.h3`
  font-weight: 500;
  font-size: ${props => props.theme.font.size18};
  color: ${props => props.theme.colors.neutral700};
  line-height: 120%;
  text-align: center;
`;

export const ReceiveNewsSubtitle = styled.h4`
  font-size: ${props => props.theme.font.size16};
  color: ${props => props.theme.colors.neutral700};
  line-height: 150%;
  text-align: center;
`;
