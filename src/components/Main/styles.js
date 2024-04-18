import styled, { keyframes } from 'styled-components';

// animacao
const breatheAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

// estilizacao
export const Main = styled.main`
  grid-area: main;
  margin: 2rem 5rem;
`;

export const ModalBody = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  input {
    outline: none;
    margin-bottom: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.formTarefa.input.backgroundColor};
    border: 1px solid ${({ theme }) => theme.formTarefa.input.borderColor};
    color: ${({ theme }) => theme.formTarefa.input.color};
  }
`;

export const BotaoPrioridade = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  select {
    flex: 1;
    position: relative;
    appearance: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.formTarefa.input.backgroundColor};
    border: 1px solid ${({ theme }) => theme.formTarefa.input.borderColor};
    color: ${({ theme }) => theme.formTarefa.input.color};

    option {
      padding: 0.5rem;
      font-size: 1rem;
      border: 0;
      outline: 0;
    }
  }
`;

export const ContainerCores = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const InputCor = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: ${({ value }) => value} !important;
  padding: 0.25rem;
  color: ${({ value }) => value};
  height: 1rem;
  width: 1rem;
  border: 2px solid ${({ value }) => value};
  border-radius: 50%;
  display: grid;
  place-content: center;

  &:checked::before {
    transform: scale(1);
  }

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s transform ease-in-out;
    box-shadow: inset 0.5rem 0.5rem ${({ theme }) => theme.colors.white};
  }
`;

export const BotaoAdicionarTarefa = styled.button`
  background-color: ${({ theme }) => theme.colors.purple.medium};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
  bottom: 6rem;
  right: 1.5rem;
  animation: ${({ $animated }) => ($animated ? breatheAnimation : 'none')} 2s
    infinite;
`;
