'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Client Project Management Platform',
    description: 'A web platform designed for agencies and companies to manage client projects, tasks, and team collaboration in one place.',
    features: ['Project dashboard', 'Kanban task board', 'Client management', 'Project status tracking', 'Team collaboration'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://tomaszobczak.github.io/client-management/',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Enterprise Resource Planning (ERP) Dashboard',
    description: 'A business platform designed to help companies manage operations, projects, financial performance, and internal resources.',
    features: ['Company operations dashboard', 'Project tracking', 'Financial overview', 'Resource management', 'Performance analytics'],
    tech: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    link: 'https://tomaszobczak.github.io/enterprise-planning/dashboard',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Appointment & Resource Scheduling Platform',
    description: 'A scheduling system that allows businesses to manage appointments, employee availability, and resource bookings.',
    features: ['Calendar scheduling system', 'Booking management', 'Resource availability tracking', 'Automated notifications', 'Reservation analytics'],
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    link: 'https://tomaszobczak.github.io/Appointment-Resource-Scheduling-Platform/#/',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Business Intelligence Reporting Platform',
    description: 'A data analytics platform that enables organizations to build dashboards, monitor KPIs, and generate business reports.',
    features: ['Advanced analytics dashboards', 'Interactive charts', 'Custom report builder', 'Exportable reports', 'KPI monitoring'],
    tech: ['Svelte', 'D3.js', 'Go', 'ClickHouse'],
    link: 'https://tomaszobczak.github.io/business-intelligence-reporting-platform/',
    image: 'https://images.unsplash.com/photo-1551288049-bbda4e32f71d?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4 text-left">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-0 tracking-tight text-left">
              Featured <br />
              <span className="text-zinc-500">Case Studies</span>
            </h3>
          </div>
          <p className="text-lg text-zinc-500 max-w-sm text-right">
            Selection of projects built for startups and enterprise clients over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-[2rem] bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h5 className="font-bold mb-3 text-sm uppercase text-zinc-500 tracking-wider">Feature Highlights</h5>
                  <ul className="space-y-2">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="text-blue-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <a href={project.link} target="_blank" className="flex items-center gap-2 font-semibold text-white group/btn">
                    Live Demo
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://github.com/TomaszObczak" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
