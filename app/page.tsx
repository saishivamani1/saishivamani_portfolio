import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main
      id="main-content"
      aria-label="Sai Shivamani — Software Engineer | AI Systems • Cloud • Full-Stack Development Portfolio"
      className="min-h-screen bg-black"
    >
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />
      <Footer />
    </main>
  );
}
