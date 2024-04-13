import { ItemTarefa } from './components/ItemTarefa';
import * as S from './styles.js';

export function Tarefas({ tarefas, mudarStatusTarefa, removerTarefa }) {
  return (
    <S.TarefasContainer>
      <ul>
        {tarefas.length === 0 && (
          <S.SemTarefas>Nenhuma tarefa cadastrada</S.SemTarefas>
        )}

        {tarefas.length > 0 &&
          tarefas.map((tarefa) => {
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
    </S.TarefasContainer>
  );
}
