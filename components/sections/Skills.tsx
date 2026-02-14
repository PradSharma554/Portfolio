'use client';

import { Code2, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
  {
    title: 'CS Fundamentals',
    skills: ['OOPS', 'DBMS', 'OS', 'DSA', 'System Design'],
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Technical Skills
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">Tech Arsenal</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-bold text-white">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-110 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
