import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
