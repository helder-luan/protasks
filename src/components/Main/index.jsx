import { useRef, useState } from 'react';
import { v4 } from 'uuid';
import { IoMdAdd } from 'react-icons/io';
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from 'react-icons/fc';
import { Modal } from '../Modal/index.jsx';
import { Tarefas } from '../Tarefas';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Theme } from '../../theme/theme.js';
import * as S from './styles.js';

export function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const nomeTarefa = useRef(null);
  const dataTarefa = useRef(null);
  const corTarefa = useRef(null);
  const [prioridade, setPrioridade] = useState('B');
  const [tarefas, adicionarTarefa, _] = useLocalStorage('tarefas', []);

  if (!tarefas) {
    adicionarTarefa([]);
  }

  const prioridadeIcon = {
    B: <FcLowPriority size={24} />,
    M: <FcMediumPriority size={24} />,
    A: <FcHighPriority size={24} />,
  };

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  function setCorTarefa(cor) {
    corTarefa.current = cor;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!nomeTarefa.current.value.trim() || !dataTarefa.current.value) {
      nomeTarefa.current.classList.add('error');
      nomeTarefa.current.focus();
      dataTarefa.current.classList.add('error');

      return;
    }

    const tarefa = {
      id: v4(),
      nome: nomeTarefa.current.value,
      data: dataTarefa.current.value,
      prioridade,
      cor: corTarefa.current,
      concluida: false,
    };

    nomeTarefa.current.value = '';
    dataTarefa.current.value = '';
    corTarefa.current = '';
    setPrioridade('B');

    adicionarTarefa([...tarefas, tarefa]);
    fecharModal();
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    adicionarTarefa(novaLista);
  }

  function mudarStatusTarefa(id) {
    const novaLista = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });

    adicionarTarefa(novaLista);
  }

  return (
    <S.Main>
      <Modal
        isOpen={isOpen}
        closeModal={fecharModal}
        title="Crie uma tarefa"
        onConfirm={handleSubmit}
      >
        <S.ModalBody>
          <label htmlFor="titulo-tarefa">Título</label>
          <input
            ref={nomeTarefa}
            type="text"
            id="titulo-tarefa"
            placeholder="Digite o título da tarefa"
            onChange={() => nomeTarefa.current.classList.remove('error')}
          />

          <label htmlFor="data-tarefa">Data</label>
          <input
            ref={dataTarefa}
            type="date"
            id="data-tarefa"
            onChange={() => dataTarefa.current.classList.remove('error')}
          />

          <label htmlFor="prioridade-tarefa">Prioridade</label>
          <S.BotaoPrioridade>
            <select
              id="prioridade-tarefa"
              defaultValue={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
            >
              <option value="B">Baixa</option>
              <option value="M">Média</option>
              <option value="A">Alta</option>
            </select>
            {prioridadeIcon[prioridade] || <FcLowPriority size={24} />}
          </S.BotaoPrioridade>

          <label htmlFor="cor-card-tarefa">Cor</label>
          <S.ContainerCores>
            <S.InputCor
              onClick={(e) => setCorTarefa(e.target.value)}
              type="radio"
              name="cor"
              id="cor-1"
              value={Theme.colors.red.light}
            />
            <S.InputCor
              onClick={(e) => setCorTarefa(e.target.value)}
              type="radio"
              name="cor"
              id="cor-2"
              value={Theme.colors.lightYellow}
            />
            <S.InputCor
              onClick={(e) => setCorTarefa(e.target.value)}
              type="radio"
              name="cor"
              id="cor-3"
              value={Theme.colors.green.light2}
            />
            <S.InputCor
              onClick={(e) => setCorTarefa(e.target.value)}
              type="radio"
              name="cor"
              id="cor-3"
              value={Theme.colors.lightBlue}
            />
            <S.InputCor
              onClick={(e) => setCorTarefa(e.target.value)}
              type="radio"
              name="cor"
              id="cor-3"
              value={Theme.colors.purple.light}
            />
          </S.ContainerCores>
        </S.ModalBody>
      </Modal>
      <Tarefas
        tarefas={tarefas}
        mudarStatusTarefa={mudarStatusTarefa}
        removerTarefa={removerTarefa}
      />
      <S.BotaoAdicionarTarefa
        $animated={tarefas.length == 0}
        onClick={() => abrirModal()}
      >
        <IoMdAdd size={24} />
      </S.BotaoAdicionarTarefa>
    </S.Main>
  );
}
