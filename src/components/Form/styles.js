import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h2 {
    color: ${({ theme }) => theme.containerFormTarefa.titleColor};
  }
`;

export const FormTarefa = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  input,
  button {
    height: 3rem;
    padding: 0.5rem;
  }

  input {
    background: ${({ theme }) => theme.formTarefa.input.inputBackground};
    border: 1px solid ${({ theme }) => theme.formTarefa.input.borderColor};
    color: ${({ theme }) => theme.formTarefa.input.color};
    border-radius: 0.25rem 0 0 0.25rem;
    outline: none;
    width: 100%;
    font-size: 1rem;
    transition: 0.5s;
  }

  button {
    border: 1px solid transparent;
    border-radius: 0 0.25rem 0.25rem 0;
    background: ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
    width: 10rem;
    cursor: pointer;
    transition: 0.5s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    filter: brightness(1.1);
  }
`;
