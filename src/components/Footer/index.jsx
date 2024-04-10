import './styles.css';

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <span>Menos foco, mais procrastinação!</span>
      <p>Copyright &copy; - {anoAtual}</p>
    </footer>
  );
}
