'use client';

import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "B.E. in Computer Science",
    institution: "Chandigarh University",
    location: "Chandigarh, India",
    period: "2022 - 2026 (ongoing)",
    cgpa: "7.99/10"
  },
  {
    degree: "Senior Secondary - Non-Medical",
    institution: "St. Edwards School",
    location: "Shimla, Himachal Pradesh",
    period: "Graduated: 2022",
    marks: "Class XII: 78% | Class X: 91.2% (CBSE)"
  }
];

export default function Education() {
  return (
    <section className="py-16 px-4 md:px-10 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Education
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Academic Journey
          </h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-purple-400 font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{edu.location}</p>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20 w-fit">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-mono text-purple-300">
                    {edu.period}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-300">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.marks}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
