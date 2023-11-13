import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  padding: 8px 0;
`;

export const SelectBox = styled.div`
  font-size: ${props => props.theme.font.size14};
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`;

export const SelectPopover = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.neutral100};
  border-radius: ${props => props.theme.border.radius8};
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
  z-index: 301;
`;

export const SelectOverlay = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 300;
`;

export const SelectItem = styled.div`
  padding: 20px 16px;
  font-size: ${props => props.theme.font.size12};
  cursor: pointer;
  border-radius: ${props => props.theme.border.radius8};

  &:hover {
    background: ${props => props.theme.colors.neutral200};
  }
`;
