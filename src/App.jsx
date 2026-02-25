import { useRevealObserver, useScrollProgress } from './hooks/useScrollAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useRevealObserver();
  useScrollProgress();

  return (
    <>
      {/* Scroll progress bar - Apple style */}
      <div className="scroll-progress" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
