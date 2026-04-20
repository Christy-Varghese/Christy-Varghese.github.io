/**
 * @file StatsSheet.jsx — Q2 "The Stats Sheet"
 * @description Performance metrics section showcasing Concentrix KPIs.
 *   - AnimatedCounter: Counts up numbers with eased cubic animation on scroll
 *   - Main stats grid: Total Interactions, CSAT, AHT, Surveys (scoreboard layout)
 *   - KPI progress bars: Issue Resolution, Advisor Recommended, Quality Adoption, Logged Interaction
 *   All data reflects real Concentrix performance (Mar 2025–Apr 2026).
 */

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedCounter — Animates a number from 0 to `target` on scroll into view.
 * @param {number} target    — Final value to count up to
 * @param {string} suffix    — Text appended after the number (e.g., '%', 'min')
 * @param {number} decimals  — Decimal places to display
 * @param {number} duration  — Animation duration in seconds
 */
function AnimatedCounter({ target, suffix = '', decimals = 0, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const numTarget = parseFloat(target);
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * numTarget);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="stat-value">
      {formatted}{suffix}
    </span>
  );
}

const stats = [
  { value: 7524, suffix: '', decimals: 0, label: 'Total Interactions', sub: 'Concentrix · Mar 2025–Apr 2026' },
  { value: 93.07, suffix: '%', decimals: 2, label: 'CSAT Score', sub: 'Across 732 customer surveys' },
  { value: 12.99, suffix: 'min', decimals: 2, label: 'Avg Handle Time', sub: 'Efficiency benchmark' },
  { value: 732, suffix: '', decimals: 0, label: 'Customer Surveys', sub: 'Direct customer feedback' },
];

const kpis = [
  { value: 87.03, label: 'Issue Resolution', color: 'purple' },
  { value: 94.77, label: 'Advisor Recommended', color: 'gold' },
  { value: 95.02, label: 'Quality Adoption', color: 'gold' },
  { value: 96.17, label: 'Logged Interaction', color: 'purple' },
];

export default function StatsSheet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="px-6 md:px-16 lg:px-24 py-20" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Q2 · The Stats Sheet
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2"
      >
        Performance
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sm text-mamba-muted mb-8 font-mono"
      >
        Concentrix · Technical Support Advisor · Team Captain 2025
      </motion.p>

      <div className="half-court mb-8" />

      {/* Main stats grid — scoreboard style */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-mamba-border rounded-2xl overflow-hidden mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="bg-mamba-card p-6 text-center group hover:bg-mamba-card/80 transition-colors"
          >
            <div className="font-headline text-3xl md:text-4xl font-bold text-mamba-gold leading-none mb-1">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-mamba-muted mb-1">
              {stat.label}
            </div>
            <div className="text-[10px] text-mamba-hint hidden md:block">
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* KPI bars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="bg-mamba-card border border-mamba-border rounded-xl p-4 hover:border-mamba-purple/40 transition-colors"
          >
            <div className="font-mono text-xl font-bold text-mamba-white mb-1">
              <AnimatedCounter target={kpi.value} suffix="%" decimals={2} />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-mamba-muted mb-3">
              {kpi.label}
            </div>
            <div className="h-1 rounded-full bg-mamba-darker overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${
                  kpi.color === 'gold' ? 'bg-mamba-gold' : 'bg-mamba-purple'
                }`}
                initial={{ width: '0%' }}
                whileInView={{ width: `${kpi.value}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-xs text-mamba-hint font-mono"
      >
        Escalation managed: 11.39% · Team Captain 2025 recognition
      </motion.p>
    </section>
  );
}
