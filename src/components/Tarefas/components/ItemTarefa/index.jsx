import { IoTrashSharp } from 'react-icons/io5';
import * as S from './styles.js';

export function ItemTarefa({ tarefa, mudarStatusTarefa, removerTarefa }) {
  return (
    <S.ItemTarefa className={`tarefa ${tarefa.concluida && 'concluida'}`}>
      <div>
        <input
          type="checkbox"
          onChange={() => mudarStatusTarefa(tarefa.id)}
          checked={!!tarefa.concluida}
        />
        <label htmlFor=""></label>
      </div>
      <span>{tarefa.nome}</span>
      <button onClick={() => removerTarefa(tarefa.id)}>
        <IoTrashSharp />
      </button>
    </S.ItemTarefa>
  );
}
