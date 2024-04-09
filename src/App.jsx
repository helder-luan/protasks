import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TemaContextProvider } from './contexts/TemaContext';
import { Main } from './components/Main';

function App() {
  console.log('App');
  return (
    <>
      <TemaContextProvider>
        <Header />
        <Main />
      </TemaContextProvider>
      <Footer />
    </>
  );
}

export default App;
