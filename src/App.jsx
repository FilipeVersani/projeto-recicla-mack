import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { LinhasSection } from './components/LinhasSection.jsx';
import { VideoReeeSection } from './components/VideoReeeSection.jsx';
import { ColetaSection } from './components/ColetaSection.jsx';
import { Sobre } from './components/Sobre.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LinhasSection />
        <VideoReeeSection />
        <ColetaSection />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}
