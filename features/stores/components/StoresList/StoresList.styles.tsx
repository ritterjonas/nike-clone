import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: end;
  gap: ${props => props.theme.spacing.layout32};
  border-radius: ${props => props.theme.border.radius8};
  background: ${props => props.theme.colors.neutral200};
  flex: 1 1 0px;
`;

export const ListItem = styled.div`
  width: 100%;
  cursor: pointer;
`;
