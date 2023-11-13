import styled from 'styled-components';

export const InputContainer = styled.div`
  background-color: ${props => props.theme.colors.neutral100};
  border: 1px solid ${props => props.theme.colors.neutral300};
  border-radius: ${props => props.theme.border.radius50};
  padding: 16px;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.layout8};
  flex: 1;
`;

export const InputText = styled.input`
  color: ${props => props.theme.colors.neutral500};
  border: none;
  outline: none;
  flex: 1;
  font-size: ${props => props.theme.font.size16};
`;
