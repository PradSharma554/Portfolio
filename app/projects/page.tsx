'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import next/image for optimization
import { ArrowLeft, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
// import SmoothScroll from '@/components/ui/SmoothScroll'; // Remove SmoothScroll if it feels heavy
import ScrollReveal from '@/components/animations/ScrollReveal';

const projects = [
  {
    id: 3,
    title: "Coding Lantern",
    category: "AI Productivity / EdTech",
    description: "AI-powered developer productivity platform with real-time algorithm analysis, mistake tracking journaling, and optimization insights using Google Gemini AI. Helps developers improve their coding efficiency and learn from their mistakes.",
    stack: ["Next.js 14", "MongoDB", "Tailwind", "Gemini AI"],
    color: "from-orange-500 to-red-500",
    link: "https://codinglantern.netlify.app/",
    github: "#",
    image: "/images/codinglantern.webp"
  },
  {
    id: 2,
    title: "Toodl",
    category: "Full Stack App",
    description: "Mood-tracking app with real-time Firebase integration and emotional trend visualization. Fully responsive for seamless mobile and desktop use. Allows users to track their daily mood and visualize their emotional well-being over time.",
    stack: ["Next.js", "Firebase", "Tailwind", "Recharts"],
    color: "from-purple-600 to-pink-500",
    link: "https://toodl-pradyuman.netlify.app/",
    github: "#",
    image: "/images/toodle.webp"
  },
  {
    id: 1,
    title: "SupplyGuard",
    category: "Blockchain / Web3",
    description: "A blockchain-based parcel tracker ensuring transparency and real-time updates. Uses decentralized ledgers to prevent fraud and enable audit trails. The system provides a secure and immutable history of the parcel's journey.",
    stack: ["Next.js", "Solidity", "Ganache", "Tailwind"],
    color: "from-blue-600 to-cyan-500",
    link: "#",
    github: "#",
    image: "/images/supplyguard.webp"
  }
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    // <SmoothScroll> // Removed wrapper to revert to native scrolling for performance
      <main className="bg-black min-h-screen text-white w-full overflow-x-hidden selection:bg-purple-500/30">
        <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12 lg:px-20">
          
          {/* Header Section */}
          <ScrollReveal direction="down">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-16 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            
            <div className="mb-24">
              <h1 className="text-6xl md:text-8xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-600 mb-8">
                Featured Work
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                A selection of projects exploring the intersection of design, blockchain, and user experience.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects List */}
          <div className="flex flex-col gap-32">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} viewportAmount={0.3} direction="up">
                <div className={`group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Image/Visual Area */}
                  <div className={`relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    
                    {/* Project Image Background with Optimization */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      priority={index === 0} // Prioritize LCP for first image
                    />
                    
                     {/* Gradient Overlay for Text Readability */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-700 mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-xs font-mono text-purple-200 uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay Noise */}
                    <div className="absolute inset-0 bg-white/5 opacity-5 pointer-events-none mix-blend-overlay" />
                  </div>

                  {/* Content Area */}
                  <div className={`flex flex-col ${index % 2 === 1 ? 'lg:col-start-1 lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                    <div className="mb-6">
                        <span className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                            0{index + 1} — {project.category}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                            {project.title}
                        </h2>
                        <p className={`text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-2 mb-10 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                        {project.stack.map(tech => (
                            <span key={tech} className="text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-white/5 px-3 py-1.5 rounded-full hover:text-white hover:border-purple-500/30 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <a 
                            href={project.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all group/btn"
                        >
                            <Github className="w-5 h-5" />
                            <span className="font-medium">Source</span>
                        </a>
                        
                        {project.id !== 1 && (
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-purple-600 border border-purple-500 rounded-full hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all group/btn"
                            >
                                <span className="font-medium">Live Demo</span>
                                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                        )}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </main>
    // </SmoothScroll>
  );
}
