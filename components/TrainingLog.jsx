/**
 * @file TrainingLog.jsx — Q4 "The Training Log"
 * @description Work experience timeline section. Each role is displayed on a
 *   vertical timeline (gold→purple gradient line) with a narrative basketball
 *   badge (Starting Five, Off-Season Training, Mid-Season Grind, etc.).
 *   Current roles are highlighted with gold dots; past roles use purple.
 *   Roles span: Concentrix, IIT Roorkee, Quality Inn, City of London,
 *   ExperientialEtc, NeyX.
 */

'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Shield, Gamepad2, Palette } from 'lucide-react';

/** Work experience entries — ordered from most recent to oldest */
const experiences = [
  {
    role: 'Technical Support Advisor',
    company: 'Concentrix',
    type: 'Full-time · Remote',
    location: 'London, Ontario, Canada',
    date: 'Nov 2024 – Present',
    current: true,
    badge: 'Team Captain 2025',
    icon: <Briefcase size={16} />,
    narrative: 'Starting Five — Leading the Floor',
    bullets: [
      'Handled 7,524 interactions (Mar 2025–Apr 2026); analysed trends to reduce resolution time',
      '93.07% CSAT across 732 surveys · 94.77% Advisor Recommendation · exceeded team benchmarks',
      '12.99-min AHT · 87.03% first-contact resolution · 95.02% Quality Adoption',
      'Managed 11.39% escalation rate with Tier 2/3 teams; contributed to hiring as Team Captain',
    ],
    tags: ['KPI Analysis', 'Data Documentation', 'Team Leadership'],
  },
  {
    role: 'IIT Roorkee — Data Analytics with AI & Gen AI',
    company: 'Indian Institute of Technology, Roorkee',
    type: 'Programme · In Progress',
    location: 'Online',
    date: 'Mar 2026 – Oct 2026',
    current: true,
    badge: 'Off-Season Training',
    icon: <GraduationCap size={16} />,
    narrative: 'Off-Season Training — Leveling Up',
    bullets: [
      'Python for analytics, Pandas, NumPy, Machine Learning foundations',
      'Generative AI, Prompt Engineering, LLMs — building the next-gen skillset',
      'Power BI, Tableau, Business Intelligence — data visualization mastery',
    ],
    tags: ['Python', 'ML', 'Gen AI', 'Power BI', 'LLMs'],
  },
  {
    role: 'User Support Technician',
    company: 'Quality Inn',
    type: 'Full-time · On-site',
    location: 'Chatham, Ontario',
    date: 'May – Nov 2024',
    icon: <Shield size={16} />,
    narrative: 'Mid-Season Grind',
    bullets: [
      'Managed IT for POS, network infrastructure, and mobile enterprise devices',
      'Streamlined workflows integrating IT systems to improve data retrieval and efficiency',
    ],
    tags: ['ServiceNow', 'Mobile Enterprise', 'Client Relations'],
  },
  {
    role: 'Hardware Technician',
    company: 'City of London, Canada',
    type: 'Co-op · On-site',
    location: 'London, Ontario',
    date: 'May – Sep 2023',
    icon: <Briefcase size={16} />,
    narrative: 'Training Camp',
    bullets: [
      'Coordinated ~60 hardware deployments using Windows, MacOS, ServiceNow, JAMF',
      'Maintained inventory compliance documentation for ~50% of deployed equipment',
      'Achieved 80% customer satisfaction through data-driven communication',
    ],
    tags: ['JAMF', 'ServiceNow', 'Excel Analytics'],
  },
  {
    role: 'Augmented Reality Generalist',
    company: 'ExperientialEtc',
    type: 'Full-time · Remote',
    location: 'Mumbai, India',
    date: 'Jan – Apr 2022',
    icon: <Gamepad2 size={16} />,
    narrative: 'All-Star Game',
    bullets: [
      'Developed AR effects for 6 brands on Instagram and Snapchat — 20% → 35% interaction rates',
      'Adapted to niche tools (Spark AR, Vuforia, MindAR) and drove product innovation roadmap',
    ],
    tags: ['Spark AR', 'Vuforia', 'MindAR'],
  },
  {
    role: 'User Experience Designer',
    company: 'NeyX',
    type: 'Internship',
    location: 'Kolkata, India',
    date: 'Oct – Dec 2021',
    icon: <Palette size={16} />,
    narrative: 'Summer League',
    bullets: [
      'Designed UI/UX using Figma and Adobe XD; applied design thinking in cross-functional teams',
    ],
    tags: ['Figma', 'Adobe XD', 'Design Systems'],
  },
];

export default function TrainingLog() {
  return (
    <section id="training" className="px-6 md:px-16 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Q4 · The Training Log
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sm text-mamba-muted mb-8 max-w-lg"
      >
        From summer league to the starting five — every rep counts. The journey from IT support to IIT Roorkee Data Analytics is the off-season training for the next level.
      </motion.p>

      <div className="half-court mb-8" />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical court line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-mamba-gold/60 via-mamba-purple/40 to-mamba-border/20" />

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full border-2 z-10 ${
                  exp.current
                    ? 'border-mamba-gold bg-mamba-gold-dim shadow-lg shadow-mamba-gold/20'
                    : 'border-mamba-purple bg-mamba-purple-dim'
                }`}
              />

              <div
                className={`bg-mamba-card border rounded-2xl p-5 transition-all duration-300 hover:border-mamba-gold/30 ${
                  exp.current ? 'border-mamba-gold/20' : 'border-mamba-border'
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-headline text-lg font-bold uppercase text-mamba-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-mamba-gold-dim border border-mamba-gold/20 text-mamba-gold">
                          Current
                        </span>
                      )}
                      {exp.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-mamba-purple-dim border border-mamba-purple/20 text-mamba-purple">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-mamba-muted">{exp.company} · {exp.type}</div>
                    <div className="text-xs text-mamba-hint font-mono">{exp.location}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-mamba-hint whitespace-nowrap">{exp.date}</span>
                  </div>
                </div>

                {/* Narrative badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-mamba-darker border border-mamba-border text-[10px] font-mono text-mamba-muted mb-3">
                  🏀 {exp.narrative}
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-mamba-muted leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-mamba-purple/50" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-mamba-darker text-mamba-hint border border-mamba-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
