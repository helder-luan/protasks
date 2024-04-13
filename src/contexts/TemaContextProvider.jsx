import { LightTheme } from '../theme/lightTheme';
import { DarkTheme } from '../theme/darkTheme';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TemaContext } from './TemaContext';

export function TemaContextProvider({ children }) {
  const [tema, updateTema, _] = useLocalStorage('tema', LightTheme);

  function toggleTema() {
    updateTema(tema.name === 'light' ? DarkTheme : LightTheme);
  }

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      <ThemeProvider theme={tema}>{children}</ThemeProvider>
    </TemaContext.Provider>
  );
}
