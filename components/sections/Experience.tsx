'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  },
  {
    company: "Few Technologies",
    role: "Full Stack Intern",
    period: "Oct 2024 – Jan 2025",
    tech: ["Next.js", "GSAP", "MongoDB", "Tailwind CSS"],
    points: [
      "Developed and maintained a full-stack website using Next.js & TS.",
      "Created a responsive UI leveraging Tailwind CSS and GSAP animations.",
      "Integrated backend APIs ensuring performance and scalability."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold font-space text-white/10 mb-20 uppercase"
        >
          Career Logs
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 md:left-1/2 w-1 top-0 bottom-0 bg-purple-500 origin-top"
          />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-10 items-center`}>
                <div className="flex-1 w-full md:w-1/2" /> {/* Spacer */}
                
                <div className="relative z-10 p-2 bg-black border-2 border-purple-500 rounded-full">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1 w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-space text-white group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                      <h4 className="text-xl text-gray-400">{exp.company}</h4>
                    </div>
                    <span className="text-sm font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                         <span className="mt-1.5 w-1 h-1 bg-purple-400 rounded-full shrink-0" />
                         {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded hover:bg-white/10 hover:text-white transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
