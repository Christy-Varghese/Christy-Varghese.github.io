'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'TeachAR',
    badge: '🏆 Rookie of the Year',
    icon: '🎓',
    description:
      'Immersive AR learning app for Grade 6–8 students. Deployed across 3 institutions with an 80% success rate. Like a rookie taking the league by storm.',
    stats: [
      { value: '250', label: 'Students' },
      { value: '80%', label: 'Success rate' },
      { value: '1st', label: 'IEEE Prize' },
      { value: '2nd', label: 'KSCSTE' },
    ],
    tags: [
      { name: 'Unity', color: 'purple' },
      { name: 'AR', color: 'purple' },
      { name: 'Education', color: '' },
      { name: 'IEEE Winner', color: 'gold' },
    ],
    link: 'https://www.youtube.com/watch?v=ikgZwYN-8Dw&t=13s',
    linkLabel: 'Watch demo',
  },
  {
    title: 'StudyBuddy',
    badge: '📚 Mastering the Fundamentals',
    icon: '🤖',
    description:
      'AI-powered study assistant using Gemma 4 local LLM with RAG pipeline. Optimized for on-device inference — mastering the basics before the big plays.',
    stats: [
      { value: 'Gemma 4', label: 'LLM' },
      { value: 'RAG', label: 'Pipeline' },
      { value: 'Local', label: 'Inference' },
    ],
    tags: [
      { name: 'Python', color: 'gold' },
      { name: 'LLM', color: 'gold' },
      { name: 'RAG', color: 'purple' },
      { name: 'AI', color: 'gold' },
    ],
    link: 'https://github.com/Christy-Varghese',
    linkLabel: 'GitHub',
  },
  {
    title: 'Reboot Kerala',
    badge: '🏀 Championship Performance',
    icon: '📊',
    description:
      '5-year government mid-day meal data analysis that attracted 4 government organizations. A championship-caliber data play under pressure.',
    stats: [
      { value: '5yr', label: 'Data span' },
      { value: '4', label: 'Gov orgs' },
      { value: '2nd', label: 'Hackathon' },
    ],
    tags: [
      { name: 'Data Analysis', color: 'gold' },
      { name: 'Government', color: '' },
      { name: '2nd Place', color: 'purple' },
    ],
  },
  {
    title: 'Vita App',
    badge: '🛡️ Clutch Play',
    icon: '🌊',
    description:
      'Flood alert & safe-haven routing app. Won 1st prize for Best Design Project. Delivering under pressure when lives are on the line.',
    stats: [
      { value: '1st', label: 'Design Prize' },
    ],
    tags: [
      { name: 'UI/UX', color: 'purple' },
      { name: 'Figma', color: '' },
      { name: '1st Prize', color: 'gold' },
    ],
    link: 'https://www.behance.net/gallery/99735011/Vita-App-%28-Flood-Alert-Rescue-system%29',
    linkLabel: 'Behance',
  },
];

export default function Playbook() {
  return (
    <section id="playbook" className="px-6 md:px-16 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Q3 · The Playbook
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sm text-mamba-muted mb-8 max-w-lg"
      >
        Every game has a playbook. These are the plays that defined my career — from rookie moves to championship performances.
      </motion.p>

      <div className="half-court mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={0.1 * i} />
        ))}
      </div>
    </section>
  );
}
