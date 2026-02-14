'use client';

import { User, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 px-4 md:px-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
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

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a final-year Computer Science student at Chandigarh University, driven by a love for technology and innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working as an SDE-1 Intern at Zopdev, I specialize in building high-performance web applications using Next.js and the modern stack. My journey is defined by a relentless pursuit of excellence—combining creative design with robust engineering.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Achievements
              </h4>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-purple-400 mb-2">650+</p>
                <p className="text-sm text-gray-400">
                  Problems solved across LeetCode, Codeforces & GeeksforGeeks
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-2xl font-bold text-white mb-2">Full Stack Developer</p>
                <p className="text-sm text-gray-400">
                  Specializing in React, Next.js, and modern web technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
