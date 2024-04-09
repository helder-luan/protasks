import styled from 'styled-components';

export const ItemTarefa = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &.concluida {
    background: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.darkGray};
    transition: 0.2s;
  }

  &.concluida:hover {
    filter: brightness(0.9);
  }

  &.concluida span {
    text-decoration: line-through;
  }

  button {
    background: ${({ theme }) => theme.colors.lightRed};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    width: 1.6em;
    height: 1.6em;
    border-radius: 0.15em;
    margin-right: 0.5em;
    border: 0.15em solid ${({ theme }) => theme.colors.lightPurple};
    outline: none;
    cursor: pointer;
  }

  .checkbox-wrapper input[type='checkbox']:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
  }

  .checkbox-wrapper input[type='checkbox']:disabled + span {
    color: #c0c0c0;
  }

  .checkbox-wrapper input[type='checkbox']:focus {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.lightPurple};
  }

  input:checked {
    background-color: ${({ theme }) => theme.colors.lightPurple};
    position: relative;
  }

  input:checked::before {
    content: '\2714';
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    filter: brightness(1.1);
  }
`;
