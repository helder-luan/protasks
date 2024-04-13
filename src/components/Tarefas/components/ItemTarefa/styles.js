import styled from 'styled-components';

export const ItemTarefa = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  span {
    color: ${({ theme }) => theme.contrast};
  }

  &.concluida {
    background: ${({ theme }) => theme.colors.lightGreen};
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    span {
      color: ${({ theme }) => theme.colors.darkGray};
      text-decoration: line-through;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.lightRed};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(1.1);
    }
  }
`;
