'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import next/image for optimization
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/ui/icons';
// import SmoothScroll from '@/components/ui/SmoothScroll'; // Remove SmoothScroll if it feels heavy
import ScrollReveal from '@/components/animations/ScrollReveal';

const projects = [
  {
    id: 5,
    title: 'LLM Execution Inspector',
    category: 'Observability / AI Infra',
    description:
      'Chrome DevTools for AI applications. A tracing SDK wraps any LLM client via a JS Proxy and uses AsyncLocalStorage to reconstruct execution trees (retrieval, tool calls, retries) with zero context threading. Captures time-to-first-token and prompt-cache token splits from the SSE stream, and cuts trace payloads 250x (72KB to 290B) with SHA-256 content-addressed storage and async gzip.',
    stack: ['TypeScript', 'Express', 'PostgreSQL', 'Cloudflare R2'],
    color: 'from-emerald-500 to-teal-500',
    link: 'https://llm-inspector.vercel.app',
    github: 'https://github.com/PradSharma554/LLM-Inspector',
    image: null,
  },
  {
    id: 4,
    title: 'CloudAIr',
    category: 'Backend / AI Infra',
    description:
      "An access layer between websites and AI agents (GPTBot, ClaudeBot, Perplexity). A robots.txt-compliant crawler generates each site's llms.txt via Gemini, serves clean markdown mirrors, and exposes content through per-site MCP endpoints. Crawls are crash-resumable via per-page PostgreSQL checkpoints and heartbeat recovery, verified by resuming a SIGKILL-interrupted crawl with zero lost work.",
    stack: ['TypeScript', 'Express', 'Next.js', 'PostgreSQL', 'Gemini API', 'MCP'],
    color: 'from-sky-500 to-indigo-500',
    link: null,
    github: 'https://github.com/PradSharma554/CloudAIr',
    image: null,
  },
  {
    id: 3,
    title: 'Coding Lantern',
    category: 'AI Productivity / EdTech',
    description:
      'AI-powered developer productivity platform with real-time algorithm analysis, mistake tracking journaling, and optimization insights using Google Gemini AI. Helps developers improve their coding efficiency and learn from their mistakes.',
    stack: ['Next.js 14', 'MongoDB', 'Tailwind', 'Gemini AI'],
    color: 'from-orange-500 to-red-500',
    link: 'https://codinglantern.netlify.app/',
    github: '#',
    image: '/images/codinglantern.webp',
  },
  {
    id: 2,
    title: 'Toodl',
    category: 'Full Stack App',
    description:
      'Mood-tracking app with real-time Firebase integration and emotional trend visualization. Fully responsive for seamless mobile and desktop use. Allows users to track their daily mood and visualize their emotional well-being over time.',
    stack: ['Next.js', 'Firebase', 'Tailwind', 'Recharts'],
    color: 'from-purple-600 to-pink-500',
    link: 'https://toodl-pradyuman.netlify.app/',
    github: '#',
    image: '/images/toodle.webp',
  },
  {
    id: 1,
    title: 'SupplyGuard',
    category: 'Blockchain / Web3',
    description:
      "A blockchain-based parcel tracker ensuring transparency and real-time updates. Uses decentralized ledgers to prevent fraud and enable audit trails. The system provides a secure and immutable history of the parcel's journey.",
    stack: ['Next.js', 'Solidity', 'Ganache', 'Tailwind'],
    color: 'from-blue-600 to-cyan-500',
    link: '#',
    github: '#',
    image: '/images/supplyguard.webp',
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    // <SmoothScroll> // Removed wrapper to revert to native scrolling for performance
    <main className="min-h-screen text-white w-full overflow-x-hidden selection:bg-purple-500/30">
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
              Backend and AI infrastructure projects, plus earlier full-stack and blockchain work.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} viewportAmount={0.3} direction="up">
              <div
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image/Visual Area - Click Interaction */}
                {project.id === 1 ? (
                  // SupplyGuard: Open Popup
                  <div
                    onClick={() => setSelectedImage(project.image)}
                    className={`cursor-zoom-in relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <ProjectImageContent project={project} index={index} />
                  </div>
                ) : (
                  // Others: Link to Live Demo
                  <a
                    href={project.link ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block cursor-pointer relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <ProjectImageContent project={project} index={index} />
                  </a>
                )}

                {/* Content Area */}
                <div
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:col-start-1 lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
                >
                  <div className="mb-6">
                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                      0{index + 1} — {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h2>
                    <p
                      className={`text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div
                    className={`flex flex-wrap gap-2 mb-10 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-white/5 px-3 py-1.5 rounded-full hover:text-white hover:border-purple-500/30 transition-colors cursor-default"
                      >
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

                    {project.id !== 1 && project.link && (
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

        {/* Image Popup Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Project Preview"
                fill
                className="object-contain"
                quality={100}
              />
              <button
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
    // </SmoothScroll>
  );
}

// Helper component to avoid repetition
function ProjectImageContent({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          priority={index === 0}
        />
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.color} transition-transform duration-700 group-hover:scale-105`}
        >
          <span className="px-6 text-center text-3xl md:text-5xl font-bold font-space text-white/90">
            {project.title}
          </span>
        </div>
      )}

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-700 mix-blend-overlay`}
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="text-xs font-mono text-purple-200 uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          Click to View
        </span>
      </div>

      <div className="absolute inset-0 bg-white/5 opacity-5 pointer-events-none mix-blend-overlay" />
    </>
  );
}
