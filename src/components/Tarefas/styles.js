import styled from 'styled-components';

export const TarefasContainer = styled.section`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
`;

export const SemTarefas = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.colors.purple.light};
  }

  span {
    color: #ccc !important;
  }
`;
