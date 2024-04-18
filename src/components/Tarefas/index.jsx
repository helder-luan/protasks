import { MdAddTask } from 'react-icons/md';
import { ItemTarefa } from './components/ItemTarefa';
import * as S from './styles.js';

export function Tarefas({ tarefas, mudarStatusTarefa, removerTarefa }) {
  return (
    <S.TarefasContainer>
      {tarefas.length === 0 && (
        <S.SemTarefas>
          <MdAddTask size={48} />
          <span>Cadastre uma tarefa para começar</span>
        </S.SemTarefas>
      )}

      {tarefas.length > 0 && (
        <ul>
          {tarefas.map((tarefa) => {
            return (
              <ItemTarefa
                key={tarefa.id}
                tarefa={tarefa}
                mudarStatusTarefa={mudarStatusTarefa}
                removerTarefa={removerTarefa}
              />
            );
          })}
        </ul>
      )}
    </S.TarefasContainer>
  );
}
