'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">Let's Connect</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Have a project in mind? <br />
              <span className="text-zinc-500">Let's build it together.</span>
            </h3>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
              I am always looking for new and challenging projects to work on. If you have an idea, feel free to reach out directly via email or check my work on GitHub.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:tomaszobczak1985@outlook.com" 
                className="group flex items-center space-x-4 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95"
              >
                <Mail size={24} />
                <span>tomaszobczak1985@outlook.com</span>
              </a>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/TomaszObczak" 
                  target="_blank" 
                  className="p-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
