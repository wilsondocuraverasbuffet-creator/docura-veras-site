import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Hospitality } from './components/Hospitality';
import { Experience } from './components/Experience';
import { Method } from './components/Method';
import { Structure } from './components/Structure';
import { Portfolio } from './components/Portfolio';
import { Audiences } from './components/Audiences';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CoffeeBreakPage } from './pages/CoffeeBreakPage';

function HomePage() {
  return <><Navbar /><main><Hero /><BrandIntro /><Hospitality /><Experience /><Method /><Structure /><Portfolio /><Audiences /><QuoteForm /></main><Footer /><FloatingWhatsApp /></>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return path === '/coffee-break' ? <CoffeeBreakPage /> : <HomePage />;
}
