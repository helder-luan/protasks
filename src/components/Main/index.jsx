import { Form } from '../Form';
import { Tarefas } from '../Tarefas';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import * as S from './styles.js';

export function Main() {
  const [tarefas, adicionarTarefa, _] = useLocalStorage('tarefas', []);

  if (!tarefas) {
    adicionarTarefa([]);
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
      <Form tarefas={tarefas} adicionarTarefa={adicionarTarefa} />
      <Tarefas
        tarefas={tarefas}
        mudarStatusTarefa={mudarStatusTarefa}
        removerTarefa={removerTarefa}
      />
    </S.Main>
  );
}
