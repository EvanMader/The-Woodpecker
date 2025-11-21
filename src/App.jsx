import './App.css';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { Stats } from './components/Stats.jsx';
import { Bartenders } from './components/Bartenders.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Bartenders />
      </main>
      <Footer />
    </>
  );
}

export default App;
