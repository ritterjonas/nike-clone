import styled from 'styled-components';

export const OnlyDesktop = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const OnlyMobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;
