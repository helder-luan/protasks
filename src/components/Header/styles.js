import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  align-items: center;
  gap: 1rem;
  padding: 1rem 5rem;
  background: ${({ theme }) => theme.header.backgroundColor};
  grid-area: header;
  position: relative;

  .logo {
    width: 50px;
    height: 50px;
  }

  .titulo {
    color: ${({ theme }) => theme.colors.lightPurple};
  }

  .subtitulo {
    color: ${({ theme }) => theme.header.subtitle};
  }
`;
