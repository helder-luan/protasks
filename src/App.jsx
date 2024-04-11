import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TemaContextProvider } from './contexts/TemaContext';
import { Main } from './components/Main';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {
  return (
    <>
      <TemaContextProvider>
        <GlobalStyles />
        <Header />
        <Main />
      </TemaContextProvider>
      <Footer />
    </>
  );
}

export default App;
