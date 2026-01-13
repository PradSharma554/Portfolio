'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Split text into words (simple implementation)
    const content = text.innerText;
    text.innerHTML = content.split(' ').map(word => `<span class="opacity-10 inline-block mr-2 transition-opacity duration-300 hover:opacity-100 hover:text-purple-400 cursor-pointer">${word}</span>`).join('');
    
    const spans = text.querySelectorAll('span');

    gsap.fromTo(spans, 
      { opacity: 0.1, color: "#4b5563" },
      {
        opacity: 1,
        color: "#ffffff",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-10 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-space text-purple-500 uppercase tracking-widest mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-space leading-tight text-white mb-6">
            Engineering the <br/> <span className="text-gray-600">future of digital</span>
          </h3>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-4xl font-bold text-purple-400">7.99</p>
              <p className="text-sm text-gray-500 uppercase mt-2">CGPA (CS)</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">500+</p>
              <p className="text-sm text-gray-500 uppercase mt-2">DSA Solved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">Silver</p>
              <p className="text-sm text-gray-500 uppercase mt-2">NPTEL Elite</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <p ref={textRef} className="text-2xl md:text-4xl font-light leading-relaxed font-space">
            I am a final-year Computer Science student at Chandigarh University, driven by a love for technology and innovation. Currently working as an SDE-1 Intern at Zopdev, I specialize in building high-performance web applications using Next.js and the modern stack. My journey is defined by a relentless pursuit of excellence—combining creative design with robust engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
