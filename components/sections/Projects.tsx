'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'SupplyGuard',
    category: 'Blockchain / Web3',
    description:
      'A blockchain-based parcel tracker ensuring transparency and real-time updates. Uses decentralized ledgers to prevent fraud and enable audit trails.',
    stack: ['Next.js', 'Solidity', 'Ganache', 'Tailwind'],
    color: 'from-blue-600 to-cyan-500',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Toodl',
    category: 'Full Stack App',
    description:
      'Mood-tracking app with real-time Firebase integration and emotional trend visualization. Fully responsive for seamless mobile and desktop use.',
    stack: ['Next.js', 'Firebase', 'Tailwind', 'Recharts'],
    color: 'from-purple-600 to-pink-500',
    link: 'https://toodl-pradyuman.netlify.app/',
    github: '#',
  },
  {
    id: 3,
    title: 'Coding Lantern',
    category: 'AI Productivity / EdTech',
    description:
      'AI-powered developer productivity platform with real-time algorithm analysis, mistake tracking journaling, and optimization insights using Google Gemini AI.',
    stack: ['Next.js 14', 'MongoDB', 'Tailwind', 'Gemini AI'],
    color: 'from-orange-500 to-red-500',
    link: 'https://codinglantern.netlify.app/',
    github: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const amount = section.scrollWidth - window.innerWidth;

      gsap.to(section, {
        x: -amount,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${amount}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden" id="projects">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex flex-row relative w-max">
          {/* Intro Slide */}
          <div className="w-screen h-full flex flex-col justify-center px-10 md:px-20 bg-black border-r border-white/10 z-10 shrink-0">
            <h2 className="text-8xl md:text-9xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              FEATURED <br /> WORK
            </h2>
            <p className="mt-10 text-xl text-gray-400 max-w-xl">
              A selection of projects exploring the intersection of design, blockchain, and user
              experience.
            </p>
            <div className="mt-10 flex items-center gap-4 text-purple-400 animate-pulse">
              <span>Scroll to explore</span>
              <ArrowUpRight className="rotate-45" />
            </div>
          </div>

          {/* Projects Container (Horizontal) */}
          <div className="h-full flex items-center bg-zinc-950 px-20">
            <div className="flex gap-20">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative group w-[400px] md:w-[600px] aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Background Gradient Placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  <div className="absolute inset-0 p-10 flex flex-col justify-between">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs font-mono text-purple-300 uppercase tracking-widest border border-purple-500/30 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold font-space text-white mt-4">
                        {project.title}
                      </h3>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-500 bg-black/50 px-2 py-1 rounded backdrop-blur"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="p-3 bg-white/10 rounded-full hover:bg-white text-black hover:scale-110 transition-all"
                        >
                          <Github className="w-5 h-5 text-white hover:text-black transition-colors" />
                        </a>
                        <a
                          href={project.link}
                          className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 hover:scale-110 transition-all"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Noise or Overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none mix-blend-overlay" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
