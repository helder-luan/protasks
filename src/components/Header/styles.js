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
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const Subtitulo = styled.h4`
  color: ${({ theme }) => theme.header.subtitle};
`;
