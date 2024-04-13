import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { GlobalStyles } from './theme/GlobalStyles';
import { TemaContextProvider } from './contexts/TemaContextProvider';

function App() {
  return (
    <>
      <TemaContextProvider>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </TemaContextProvider>
    </>
  );
}

export default App;
