import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Services from './components/Services';
import Trust from './components/Trust';
import Process from './components/Process';
import Structure from './components/Structure';
import Audiences from './components/Audiences';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Trust />
        <Process />
        <Structure />
        <Audiences />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
