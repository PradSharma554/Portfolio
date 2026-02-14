'use client';

import { useRouter } from 'next/navigation';
import { Folder, ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
  const router = useRouter();

  return (
    <section className="py-16 px-4 md:px-10 relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Featured Work
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Explore My Projects
          </h3>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Description */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dive into a collection of projects showcasing blockchain innovation, full-stack development, and AI-powered solutions.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start md:justify-end">
              <button
                onClick={() => router.push('/projects')}
                className="group flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold transition-all"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Project Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {[
              { name: "SupplyGuard", category: "Blockchain" },
              { name: "Toodl", category: "Full Stack" },
              { name: "Coding Lantern", category: "AI Productivity" }
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer"
                onClick={() => router.push('/projects')}
              >
                <p className="text-xs text-purple-400 font-mono mb-2">{project.category}</p>
                <p className="text-white font-semibold">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
