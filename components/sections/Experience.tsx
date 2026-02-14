'use client';

import { Briefcase, Calendar, Code } from 'lucide-react';

const experiences = [
  {
    company: "Zopdev",
    role: "SDE-1 Intern",
    period: "June 2025 – Present",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    points: [
      "Designed and developed highly responsive and visual UIs.",
      "Integrated PostHog for behavioral analytics and event tracking.",
      "Utilized React Query for efficient API-backed state management."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16 px-4 md:px-10 relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Work Experience
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Professional Journey
          </h3>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-lg md:text-xl text-purple-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20 w-fit">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-mono text-purple-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Responsibilities */}
                <div className="md:col-span-2">
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-2 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-4 h-4 text-gray-400" />
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Tech Stack
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
