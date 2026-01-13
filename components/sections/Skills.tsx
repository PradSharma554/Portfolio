'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: "Initial C++", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Solidity / Web3", level: 80 },
  { name: "React / Next.js", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 98 },
  { name: "MongoDB", level: 85 },
  { name: "GSAP / Motion", level: 90 },
  { name: "Three.js", level: 70 },
  { name: "Git / CI/CD", level: 85 },
];

export default function Skills() {
  return (
    <section className="py-32 px-4 md:px-10 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold font-space text-white mb-6">
              TECH <br/> ARSENAL
            </h2>
            <p className="text-gray-400 text-lg">
              A curated stack of tools and technologies I use to define the digital frontier.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-purple-500/30 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-400 transition-colors">{skill.name}</h3>
                  <span className="text-xs font-mono text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.05) }}
                    className="h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
