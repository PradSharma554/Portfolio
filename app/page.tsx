import SmoothScroll from '@/components/ui/SmoothScroll';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-black min-h-screen text-white w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
