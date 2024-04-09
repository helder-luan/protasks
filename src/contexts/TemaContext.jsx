import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LightTheme } from '../theme/lightTheme';
import { DarkTheme } from '../theme/darkTheme';
import { ThemeProvider } from 'styled-components';

export const TemaContext = createContext(LightTheme);

export function TemaContextProvider({ children }) {
  const [temaLocalStorage, mudarTemaLocalStorage, _] = useLocalStorage(
    'tema',
    LightTheme,
  );
  const [tema, setTema] = useState(LightTheme);

  function toggleTema() {
    setTema((prevTema) => (prevTema.name === 'light' ? DarkTheme : LightTheme));
    mudarTemaLocalStorage(tema.name === 'light' ? DarkTheme : LightTheme);
  }

  useEffect(() => {
    if (!temaLocalStorage) {
      mudarTemaLocalStorage(LightTheme);
    }
  }, []);

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      <ThemeProvider theme={tema}>{children}</ThemeProvider>
    </TemaContext.Provider>
  );
}
