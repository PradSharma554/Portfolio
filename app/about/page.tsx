import SmoothScroll from '@/components/ui/SmoothScroll';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Hobbies from '@/components/sections/Hobbies';
import ProjectsCTA from '@/components/sections/ProjectsCTA';

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="bg-black min-h-screen text-white w-full overflow-hidden">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Hobbies />
        <ProjectsCTA />
      </main>
    </SmoothScroll>
  );
}
