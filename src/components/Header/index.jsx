import { BotaoTema } from '../BotaoTema';
import './styles.css';

export function Header() {
  return (
    <header className="cabecalho">
      <img
        className="logo"
        src="/images/logo.jpg"
        alt="Tarefa ícones criados por Vector Stall - Flaticon"
      />
      <div>
        <h1 className="titulo">PRO TASKS</h1>
        <h4 className="subtitulo">
          Não faça hoje o que pode ser feito depois de amanhã!
        </h4>
      </div>
      <BotaoTema />
    </header>
  );
}
