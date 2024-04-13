import { BotaoTema } from '../BotaoTema';
import * as S from './styles.js';

export function Header() {
  return (
    <S.Cabecalho>
      <S.Logo
        src="/images/logo.jpg"
        alt="Tarefa ícones criados por Vector Stall - Flaticon"
      />
      <div>
        <S.Titulo>PRO TASKS</S.Titulo>
        <S.Subtitulo>
          Não faça hoje o que pode ser feito depois de amanhã!
        </S.Subtitulo>
      </div>
      <BotaoTema />
    </S.Cabecalho>
  );
}
