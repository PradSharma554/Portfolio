'use client';

import { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github, Instagram, Twitter, Facebook } from 'lucide-react';

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
    <section id="contact" className="py-16 px-4 md:px-10 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-purple-400" />
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              Get In Touch
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-space text-white">
            Let's Work Together
          </h3>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <a
            href="mailto:pradyumanmusic@gmail.com"
            className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Email
              </h4>
            </div>
            <p className="text-xl text-white group-hover:text-purple-400 transition-colors">
              pradyumanmusic@gmail.com
            </p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+918580848682"
            className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Phone & Location
              </h4>
            </div>
            <p className="text-xl text-white group-hover:text-purple-400 transition-colors mb-2">
              +91 85808 48682
            </p>
            <p className="text-sm text-gray-400">Chandigarh, India</p>
          </a>
        </div>

        {/* Social Links Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Connect With Me</h4>
              <p className="text-sm text-gray-400">Follow me on social media</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Github, href: "https://github.com/PradSharma554" },
                { icon: Linkedin, href: "https://linkedin.com/in/pradyuman-5-sharma" },
                { icon: Instagram, href: "https://www.instagram.com/pradyuman_._/" },
                { icon: Twitter, href: "https://x.com/pradyum554" },
                { icon: Facebook, href: "https://www.facebook.com/pradyuman.sharma.94801" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-110 hover:-translate-y-1 transition-all"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>© 2026 Pradyuman Sharma</p>
          <p className="font-mono">{time}</p>
        </div>
      </div>
    </section>
  );
}
