import { IoMdClose } from 'react-icons/io';
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from 'react-icons/fc';
import * as S from './styles.js';

export function ItemTarefa({ tarefa, mudarStatusTarefa, removerTarefa }) {
  const prioridadeIcon = {
    B: <FcLowPriority size={24} />,
    M: <FcMediumPriority size={24} />,
    A: <FcHighPriority size={24} />,
  };

  return (
    <S.ItemTarefa
      className={`${tarefa.concluida && 'concluida'}`}
      onDoubleClick={() => mudarStatusTarefa(tarefa.id)}
    >
      <S.CabecalhoTarefa style={{ backgroundColor: tarefa.cor }}>
        {prioridadeIcon[tarefa.prioridade]}
        <S.BotaoRemoverTarefa onClick={() => removerTarefa(tarefa.id)}>
          <IoMdClose size={16} />
        </S.BotaoRemoverTarefa>
      </S.CabecalhoTarefa>

      <S.CorpoTarefa>
        <S.TituloTarefa>{tarefa.nome}</S.TituloTarefa>
        <S.DataTarefa>
          {new Date(tarefa.data).toLocaleDateString('pt-BR')}
        </S.DataTarefa>
      </S.CorpoTarefa>
    </S.ItemTarefa>
  );
}
