import { MdOutlineLightMode } from 'react-icons/md';
import { useContext } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { TemaContext } from '../../contexts/TemaContext';
import './styles.css';

export function BotaoTema() {
  const { tema, toggleTema } = useContext(TemaContext);
  return (
    <button className="botao-tema" onClick={toggleTema}>
      {tema.name === 'light' && <MdOutlineDarkMode size={32} />}
      {tema.name === 'dark' && <MdOutlineLightMode size={32} />}
    </button>
  );
}
