import styled from 'styled-components';

export const Rodape = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.footer.backgroundColor};
  color: ${({ theme }) => theme.footer.color};
  grid-area: footer;
`;
