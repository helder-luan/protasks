import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 500px;
  padding: 1.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.contrast};
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.purple.medium};
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.contrast};
  }
`;

export const ModalContent = styled.section`
  margin-bottom: 1.5rem;
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.purple.medium};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(1.1);
    }
  }

  button:nth-child(2) {
    color: ${({ theme }) => theme.colors.red.light};
    background-color: transparent;
    border: 0;
    transition: all 0.25s linear;

    &:hover {
      text-decoration: underline;
    }
  }
`;
