import { ItemTarefa } from './components/ItemTarefa';
import './styles.css';

export function Tarefas({ tarefas, mudarStatusTarefa, removerTarefa }) {
  return (
    <section>
      <ul className="lista-tarefas">
        {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada</p>}

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
    </section>
  );
}
