import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.constrast};
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: all 0.25s linear;
  }
`;
