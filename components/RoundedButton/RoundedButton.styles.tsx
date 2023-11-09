import styled from 'styled-components';

export const RoundedButton = styled.button`
  border-radius: 50px;
  background: #000;
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: white;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
