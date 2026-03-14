'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: <ShieldCheck className="text-blue-500" size={24} />,
    title: '15 Years of Experience',
    description: 'A decade and a half of delivering enterprise-grade software solutions.'
  },
  {
    icon: <Zap className="text-yellow-500" size={24} />,
    title: 'Scalable Systems',
    description: 'Expertise in building systems that grow with your business and traffic.'
  },
  {
    icon: <Cpu className="text-purple-500" size={24} />,
    title: 'Complex Problem Solver',
    description: 'Turning complicated business requirements into simple, efficient code.'
  },
  {
    icon: <Code2 className="text-green-500" size={24} />,
    title: 'Full Stack Mastery',
    description: 'From low-level backend optimization to polished frontend experiences.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Designing and building <br />
              <span className="text-zinc-500">scalable web platforms.</span>
            </h3>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              With over 15 years of experience in the industry, I have seen the web evolve from simple sites to complex, real-time distributed systems. My focus is on creating value through robust architecture and clean, maintainable code.
            </p>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              I specialize in helping startups and established businesses navigate technical challenges, from initial MVP development to scaling for millions of users. My approach combines technical excellence with a deep understanding of business goals.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold">150+</span>
                <span className="text-sm text-zinc-500 uppercase">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">15+</span>
                <span className="text-sm text-zinc-500 uppercase">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">50+</span>
                <span className="text-sm text-zinc-500 uppercase">Clients</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
