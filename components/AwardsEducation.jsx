/**
 * @file AwardsEducation.jsx — "Hall of Fame" & "Draft Class"
 * @description Two sections in one component:
 *   1. Awards — List of 6 achievements (SparkAR, IEEE, KSCSTE, Design Prize, etc.)
 *      displayed in a card with icon, title, description, and date.
 *   2. Education — 3 entries (IIT Roorkee, Fanshawe College, St. Joseph's)
 *      with abbreviation badges and "In Progress" indicator for current studies.
 */

'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Rocket, Medal, Zap } from 'lucide-react';

/** Awards data — displayed in the "Hall of Fame" section */
const awards = [
  {
    icon: <Trophy size={18} className="text-mamba-gold" />,
    bg: 'bg-mamba-gold-dim',
    title: 'SparkAR Playtime Competition — Top 76 Globally',
    sub: 'Meta · 76th of 1,000+ participants · US$1,500 Prize',
    date: 'May 2022',
  },
  {
    icon: <Medal size={18} className="text-mamba-gold" />,
    bg: 'bg-mamba-purple-dim',
    title: 'IEEE Genskill Final Year Project — 1st Place',
    sub: 'IEEE & Genskill · TeachAR tested by 250 students · 80% success rate',
    date: 'Jul 2021',
  },
  {
    icon: <Award size={18} className="text-mamba-purple" />,
    bg: 'bg-mamba-purple-dim',
    title: 'KSCSTE Techfest — 2nd Place',
    sub: 'Kerala State Government · TeachAR AR education platform',
    date: 'Dec 2021',
  },
  {
    icon: <Star size={18} className="text-mamba-gold" />,
    bg: 'bg-mamba-gold-dim',
    title: 'Best Design Project — 1st Prize',
    sub: "St. Joseph's College · Vita App — Flood Alert & Rescue System",
    date: 'Feb 2020',
  },
  {
    icon: <Zap size={18} className="text-mamba-gold" />,
    bg: 'bg-mamba-gold-dim',
    title: 'Team Captain Recognition',
    sub: 'Concentrix · 93.07% CSAT · 95.02% Quality Adoption · 7,524 interactions',
    date: '2025',
  },
  {
    icon: <Rocket size={18} className="text-mamba-purple" />,
    bg: 'bg-mamba-purple-dim',
    title: 'Reboot Kerala Hackathon — 2nd Place',
    sub: 'Kerala Government · 5-year data analysis · 4 government organisations',
    date: 'Mar 2020',
  },
];

const education = [
  {
    abbr: 'IIT',
    color: 'gold',
    degree: 'Data Analytics with AI & Generative AI',
    school: 'Indian Institute of Technology (IIT), Roorkee',
    meta: 'Mar 2026 – Oct 2026 · Python · ML · Gen AI · Power BI · LLMs',
    current: true,
  },
  {
    abbr: 'FC',
    color: 'purple',
    degree: 'Postgraduate Diploma · Mobile Application Development',
    school: 'Fanshawe College · London, Ontario, Canada',
    meta: 'May 2022 – Sep 2023 · GPA 3.87 / 4.0',
  },
  {
    abbr: 'SJ',
    color: 'gold',
    degree: 'B.Tech · Computer Science & Engineering',
    school: "St. Joseph's College of Engineering and Technology, Palai",
    meta: 'Aug 2017 – Jul 2021 · CGPA 8.3 / 10',
  },
];

export default function AwardsEducation() {
  return (
    <>
      {/* ── AWARDS ──────────────────────────────────────── */}
      <section id="awards" className="px-6 md:px-16 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-[1px] w-8 bg-mamba-gold" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
            Hall of Fame
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8"
        >
          Awards
        </motion.h2>

        <div className="half-court mb-8" />

        <div className="bg-mamba-card border border-mamba-border rounded-2xl overflow-hidden">
          {awards.map((aw, i) => (
            <motion.div
              key={aw.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="flex items-start gap-4 px-5 py-4 border-b border-mamba-border/50 last:border-b-0 hover:bg-mamba-darker/50 transition-colors"
            >
              <div className={`w-9 h-9 rounded-lg ${aw.bg} flex items-center justify-center flex-shrink-0`}>
                {aw.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-mamba-white">{aw.title}</div>
                <div className="text-xs text-mamba-muted mt-0.5">{aw.sub}</div>
              </div>
              <span className="font-mono text-[10px] text-mamba-hint whitespace-nowrap flex-shrink-0 mt-0.5">
                {aw.date}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────── */}
      <section id="education" className="px-6 md:px-16 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-[1px] w-8 bg-mamba-gold" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
            Draft Class
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8"
        >
          Education
        </motion.h2>

        <div className="half-court mb-8" />

        <div className="flex flex-col gap-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.abbr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`bg-mamba-card border rounded-2xl p-5 flex items-start gap-4 hover:border-mamba-gold/30 transition-all ${
                edu.current ? 'border-mamba-gold/30' : 'border-mamba-border'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                  edu.color === 'gold'
                    ? 'bg-mamba-gold-dim text-mamba-gold'
                    : 'bg-mamba-purple-dim text-mamba-purple'
                }`}
              >
                {edu.abbr}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-sm font-semibold text-mamba-white">{edu.degree}</span>
                  {edu.current && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-mamba-gold-dim border border-mamba-gold/20 text-mamba-gold">
                      In Progress
                    </span>
                  )}
                </div>
                <div className="text-xs text-mamba-muted">{edu.school}</div>
                <div className="text-[11px] text-mamba-hint font-mono mt-1">{edu.meta}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
