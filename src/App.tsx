import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { About } from './components/section/about';
import { Contact } from './components/section/contact';
import { Timeline } from './components/section/timeline';
import { Title } from './components/section/title';

function App() {
  return (
    <>
      <Header />
      <Title />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
