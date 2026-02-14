'use client';

import { motion } from 'framer-motion';
import { Heart, Music, BookOpen, Dumbbell, Footprints, Plane } from 'lucide-react';

const hobbies = [
  { name: "Music & Singing", icon: Music },
  { name: "Reading Books", icon: BookOpen },
  { name: "Gym & Fitness", icon: Dumbbell },
  { name: "Folk Dance", icon: Footprints },
  { name: "Traveling", icon: Plane }
];

export default function Hobbies() {
  return (
    <section className="py-16 px-4 md:px-10 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <Heart className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Hobbies & Interests
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl font-bold font-space text-white"
          >
            Beyond Coding
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Beyond coding, I am passionate about music, singing, reading books, going to the gym, folk dancing, and traveling. These diverse interests keep me balanced and continuously inspire my creative problem-solving in tech.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all text-center"
              >
                <hobby.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">{hobby.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
