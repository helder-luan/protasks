import * as S from './styles.js';

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <S.Rodape className="rodape">
      <span>Menos foco, mais procrastinação!</span>
      <p>Copyright &copy; - {anoAtual}</p>
    </S.Rodape>
  );
}
