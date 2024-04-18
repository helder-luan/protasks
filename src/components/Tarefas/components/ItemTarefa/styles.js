import styled from 'styled-components';

export const ItemTarefa = styled.li`
  display: flex;
  flex-direction: column;
  width: 18rem;
  background: ${({ theme }) => theme.backgroundColorSecondary};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.contrast};

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const CabecalhoTarefa = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 3rem;
`;

export const BotaoRemoverTarefa = styled.button`
  display: block;
  opacity: 0;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
    background: ${({ theme }) => theme.colors.red.light};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

export const CorpoTarefa = styled.div`
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 10rem;
`;

export const TituloTarefa = styled.span`
  line-height: 1.25;
  font-size: 1.25rem;
  font-weight: 700;
  width: 100%;
`;

export const DataTarefa = styled.span`
  padding: 0.5rem;
  width: fit-content;
  border-radius: 0.5rem;
  background: ${({ theme }) => `${theme.colors.gray.dark}80`};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray.light};
`;
