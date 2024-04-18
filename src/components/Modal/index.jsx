import { IoMdClose } from 'react-icons/io';
import * as S from './styles.js';
import { useEffect } from 'react';

export function Modal({
  children,
  isOpen,
  closeModal,
  title,
  onConfirm,
  onCancel = null,
}) {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <S.ModalWrapper $isOpen={isOpen} onClick={handleOutsideClick}>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>{title}</h2>
          <button onClick={closeModal}>
            <IoMdClose size={32} />
          </button>
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
        <S.ModalFooter>
          <button onClick={onConfirm}>Salvar</button>
          {onCancel && <button onClick={onCancel}>Cancelar</button>}
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}
