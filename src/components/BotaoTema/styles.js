import styled from 'styled-components';

export const BotaoTema = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
