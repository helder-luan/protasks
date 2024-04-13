import styled from 'styled-components';

export const TarefasContainer = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }
`;

export const SemTarefas = styled.p`
  color: ${({ theme }) => theme.contrast};
`;
