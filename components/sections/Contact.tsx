'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-zinc-950 flex flex-col justify-between py-20 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-purple-500 font-mono tracking-widest uppercase mb-6"
        >
          What's Next?
        </motion.p>
        
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-space text-white mb-10 leading-none"
        >
          LET'S WORK <br/> TOGETHER
        </motion.h2>

        <motion.a 
          href="mailto:pradyumanmusic@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl md:text-4xl text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-2 mb-12"
        >
          pradyumanmusic@gmail.com
        </motion.a>

        <div className="flex gap-8">
           {[
             { icon: Github, href: "https://github.com/Pradyuman554" },
             { icon: Linkedin, href: "https://linkedin.com/in/pradyuman-5-sharma" },
             { icon: Phone, href: "tel:+918580848682" }
           ].map((item, i) => (
             <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
               <item.icon className="w-6 h-6" />
             </a>
           ))}
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-white/10 pt-10 text-gray-600 text-sm font-mono">
        <div>
          <p>© 2026 Pradyuman Sharma</p>
          <p>Made with Next.js, Tailwind & Motion</p>
        </div>
        <div className="text-right">
          <p>Chandigarh, India</p>
          <p>{time}</p>
        </div>
      </div>
    </section>
  );
}
