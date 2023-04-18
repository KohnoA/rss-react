import './styles/global.scss';
import Header from './components/UI/Header/Header';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
