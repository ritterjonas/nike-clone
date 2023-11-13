import styled from 'styled-components';

export const RoundedButton = styled.button`
  border-radius: ${props => props.theme.border.radius50};
  background: ${props => props.theme.colors.primary};
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing.layout8};
  color: white;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: ${props => props.theme.font.size16};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
