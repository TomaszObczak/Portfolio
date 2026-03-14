'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
  Frontend: [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'
  ],
  Backend: [
    'Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'FastAPI'
  ],
  DevOps: [
    'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'GitHub Actions'
  ]
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto"
          >
            I use a modern and proven technology stack to build high-performance and scalable applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(techStack).map(([category, techs], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1, duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <h3 className="text-xl font-bold border-b border-zinc-800 pb-4 flex items-center justify-between">
                {category}
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{techs.length} skills</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, techIdx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIdx * 0.1) + (techIdx * 0.05) }}
                    className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium hover:border-blue-500/50 hover:bg-zinc-800 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
