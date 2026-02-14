'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">


      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mix-blend-difference text-white mb-6">
            PRADYUMAN <br className="hidden md:block" /> SHARMA
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto mb-10 font-light"
        >
          Creative Developer & Software Engineer crafting high-impact digital experiences.
        </motion.p>
        
         <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => router.push('/about')}
            className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-purple-400 transition-colors rounded-full"
          >
            About Me
          </button>
          <button
            onClick={() => router.push('/projects')}
            className="px-8 py-3 border border-white/20 text-white font-bold uppercase hover:bg-white/10 transition-colors rounded-full"
          >
            View Work
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 border border-white/20 text-white font-bold uppercase hover:bg-white/10 transition-colors rounded-full"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <ArrowDown className="w-4 h-4 text-purple-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
