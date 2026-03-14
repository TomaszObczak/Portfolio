'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CEO at CloudSaaS',
    text: 'Tomasz is an exceptional developer who brings deep technical knowledge and a practical approach to building complex software systems. His ability to navigate technical challenges is unmatched.',
    company: 'CloudSaaS'
  },
  {
    name: 'Michael Chen',
    role: 'CTO at NextGen FinTech',
    text: 'Working with Tomasz was a game-changer for our platform architecture. He helped us scale from 10k to 1M users in under a year with zero downtime. Technical expertise at its finest.',
    company: 'NextGen FinTech'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Product Manager at StartupFlow',
    text: 'Reliability and communication are key when working with senior developers. Tomasz consistently delivered high-quality code ahead of schedule and kept the team informed every step of the way.',
    company: 'StartupFlow'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Client <span className="text-zinc-500">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what my clients and partners have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all flex flex-col h-full relative group"
            >
              <Quote className="absolute top-10 right-10 text-zinc-800 group-hover:text-blue-500 transition-colors" size={48} />
              <p className="text-xl font-medium mb-12 italic leading-relaxed text-zinc-300">
                "{testimonial.text}"
              </p>
              <div className="mt-auto flex flex-col space-y-1">
                <span className="text-lg font-bold text-white">{testimonial.name}</span>
                <span className="text-sm text-zinc-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
