import SmoothScroll from '@/components/ui/SmoothScroll';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import ProjectsCTA from '@/components/sections/ProjectsCTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-black min-h-screen text-white w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectsCTA />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
