import { IoTrashSharp } from 'react-icons/io5';
import * as S from './styles.js';
import { Checkbox } from '../../../Checkbox/index.jsx';

export function ItemTarefa({ tarefa, mudarStatusTarefa, removerTarefa }) {
  return (
    <S.ItemTarefa className={`${tarefa.concluida && 'concluida'}`}>
      <Checkbox
        checked={tarefa.concluida}
        onClick={() => {
          mudarStatusTarefa(tarefa.id);
          console.log('Mudou o status da tarefa');
        }}
      />
      <span>{tarefa.nome}</span>
      <button onClick={() => removerTarefa(tarefa.id)}>
        <IoTrashSharp />
      </button>
    </S.ItemTarefa>
  );
}
