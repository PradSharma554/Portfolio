import Hero from '@/components/sections/Hero';

import ProjectsCTA from '@/components/sections/ProjectsCTA';
import Contact from '@/components/sections/Contact';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen text-white w-full overflow-hidden">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectsCTA />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
