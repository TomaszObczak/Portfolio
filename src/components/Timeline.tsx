'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    year: '2020 — Present',
    role: 'Senior Full Stack Consultant',
    company: 'Independent / Freelance',
    description: 'Advising startups on architecture and building scalable web platforms from scratch.'
  },
  {
    year: '2016 — 2020',
    role: 'Lead Developer',
    company: 'TechGrowth Systems',
    description: 'Led a team of 15 developers in building a high-traffic SaaS platform for business analytics.'
  },
  {
    year: '2012 — 2016',
    role: 'Senior Software Engineer',
    company: 'Enterprise Solutions Inc.',
    description: 'Architected and maintained large-scale enterprise systems with high availability requirements.'
  },
  {
    year: '2008 — 2012',
    role: 'Full Stack Developer',
    company: 'WebCraft Studio',
    description: 'Developed various client projects ranging from simple websites to custom CMS platforms.'
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              15 Years of <br />
              <span className="text-zinc-500">Continuous Evolution</span>
            </h3>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
              My career has been a continuous journey of learning and adapting to the ever-changing landscape of web development. From early PHP projects to modern distributed systems.
            </p>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">Core Philosophy</p>
              <p className="text-xl font-medium text-white italic">
                "Simple is better than complex. Scalability is not just about code, it's about architecture and maintainability."
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l border-zinc-800 group"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                <span className="text-sm font-mono text-blue-500 mb-2 block">{item.year}</span>
                <h4 className="text-2xl font-bold mb-1">{item.role}</h4>
                <p className="text-zinc-300 font-medium mb-4">{item.company}</p>
                <p className="text-zinc-500 leading-relaxed max-w-md">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
