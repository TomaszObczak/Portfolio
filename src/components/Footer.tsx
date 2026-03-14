'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-bold tracking-tighter"
        >
          TO<span className="text-blue-500">.</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-sm"
        >
          © {new Date().getFullYear()} Tomasz Obczak. Senior Full Stack Developer. All rights reserved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-6 text-sm text-zinc-500 font-medium"
        >
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </motion.div>
      </div>
    </footer>
  );
}
