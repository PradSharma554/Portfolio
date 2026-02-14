'use client';

import { motion } from 'framer-motion';
import { Trophy, Target } from 'lucide-react';

const achievements = [
  {
    title: "NPTEL Elite Silver Badge",
    description: "Cloud Computing (76%) - College Topper in Multi-Core Architecture (73%)",
    category: "Academic"
  },
  {
    title: "700+ DSA Problems",
    description: "Solved across LeetCode, GeeksforGeeks, and Codeforces",
    category: "Competitive Programming"
  },
  {
    title: "LeetCode Contest Rating: 1538",
    description: "Peak rating achieved through consistent competitive performance",
    category: "Competitive Programming"
  },
  {
    title: "Hacktoberfest 2024 Level 4",
    description: "Earned Holopin Level 4 badge through open-source contributions",
    category: "Open Source"
  },
  {
    title: "GirlScript Summer of Code 2024",
    description: "Explorer Badge with four merged pull requests",
    category: "Open Source"
  },
  {
    title: "National Level Singing Awards",
    description: "Won multiple national level awards in classical singing (2018, 2019, 2020)",
    category: "Extra-Curricular"
  }
];

const interests = [
  "Web Development",
  "Blockchain",
  "Artificial Intelligence",
  "Cloud Computing",
  "System Design"
];

export default function Achievements() {
  return (
    <section className="py-16 px-4 md:px-10 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <Trophy className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Achievements & Interests
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl font-bold font-space text-white"
          >
            Recognition & Passions
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-purple-400" />
              Achievements
            </h4>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-purple-400 rounded-full shrink-0" />
                    <div>
                      <p className="text-sm font-mono text-purple-300 mb-1">
                        {achievement.category}
                      </p>
                      <p className="text-white font-semibold mb-1">
                        {achievement.title}
                      </p>
                      <p className="text-sm text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Areas of Interest
            </h4>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
