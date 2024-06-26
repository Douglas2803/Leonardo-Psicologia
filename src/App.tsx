import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { About } from './components/section/about';
import { Contact } from './components/section/contact';

function App() {
  return (
    <>
      <Header />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;
