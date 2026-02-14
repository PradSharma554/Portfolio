'use client';

import { User, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 px-4 md:px-10 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              About Me
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Building the Future
          </h3>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I am a final-year Computer Science student at Chandigarh University, driven by a love for technology and innovation. Currently working as an SDE-1 Intern at Zopdev, I specialize in building high-performance web applications using Next.js and the modern stack.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My journey is defined by a relentless pursuit of excellence—combining creative design with robust engineering. My strengths lie in <span className="text-purple-400 font-semibold">collaboration, creativity, problem-solving,</span> and an <span className="text-purple-400 font-semibold">endless curiosity for new technologies</span>. I am constantly evolving and get truly addicted to what I do.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Let's connect if you're looking for a developer who's passionate about innovation and cutting-edge technologies!
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h4 className="text-xl font-bold text-white">Quick Stats</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">700+</p>
                <p className="text-sm text-gray-400">DSA Problems Solved</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">1538</p>
                <p className="text-sm text-gray-400">LeetCode Peak Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">7.99</p>
                <p className="text-sm text-gray-400">CGPA / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
