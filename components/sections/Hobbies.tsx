'use client';

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
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Hobbies & Interests
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Beyond Coding
          </h3>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-300">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Beyond coding, I am passionate about music, singing, reading books, going to the gym, folk dancing, and traveling. These diverse interests keep me balanced and continuously inspire my creative problem-solving in tech.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-110 hover:-translate-y-1 transition-all text-center cursor-pointer"
              >
                <hobby.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
