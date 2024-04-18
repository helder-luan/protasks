import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.constrast};
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: all 0.25s linear;
    font-family: 'Inter', sans-serif;
  }

  #root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas: 'header' 'main' 'footer';
    line-height: 1.5;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  .error {
    border: 1px solid ${({ theme }) => theme.colors.red.light} !important;
  }

  .success {
    color: 1px solid ${({ theme }) => theme.colors.green.medium};
  }
`;
