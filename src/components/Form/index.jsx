import { IoMdAdd } from 'react-icons/io';
import { useRef } from 'react';
import { v4 } from 'uuid';
import * as S from './styles.js';

export function Form({ tarefas, adicionarTarefa }) {
  const inputTarefas = useRef(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!inputTarefas.current.value.trim()) return;

    const tarefa = {
      id: v4(),
      nome: inputTarefas.current.value,
      concluida: false,
    };

    adicionarTarefa([...tarefas, tarefa]);

    inputTarefas.current.value = '';
    inputTarefas.current.focus();
  }

  return (
    <S.Container className="container">
      <h2>Adicionar tarefa</h2>

      <S.FormTarefa onSubmit={handleFormSubmit} className="form">
        <input ref={inputTarefas} type="text" placeholder="Digite a tarefa" />
        <button type="submit">
          <IoMdAdd size={24} />
        </button>
      </S.FormTarefa>
    </S.Container>
  );
}
