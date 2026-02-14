import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Hobbies from '@/components/sections/Hobbies';
import ProjectsCTA from '@/components/sections/ProjectsCTA';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white w-full overflow-hidden">
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Education />
      </ScrollReveal>
      <ScrollReveal>
        <Achievements />
      </ScrollReveal>
      <ScrollReveal>
        <Hobbies />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectsCTA />
      </ScrollReveal>
    </main>
  );
}
