import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { About } from './components/section/about';
import { Contact } from './components/section/contact';
import { Title } from './components/section/title';
import { Timeline } from './components/section/timeline';

function App() {
  return (
    <>
      <Header />
      <Title />
      <Timeline />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;
