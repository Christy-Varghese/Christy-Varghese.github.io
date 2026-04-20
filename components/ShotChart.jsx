'use client';

import { motion } from 'framer-motion';

const zones = [
  // Row 1 — outer long range
  { name: 'Python', level: 95, x: 15, y: 10, size: 'lg' },
  { name: 'SQL', level: 88, x: 50, y: 8, size: 'lg' },
  { name: 'Spark AR', level: 92, x: 82, y: 12, size: 'lg' },

  // Row 2 — mid-range
  { name: 'Unity', level: 85, x: 20, y: 30, size: 'md' },
  { name: 'Power BI', level: 75, x: 45, y: 28, size: 'md' },
  { name: 'JavaScript', level: 78, x: 70, y: 32, size: 'md' },

  // Row 3 — paint area (core skills)
  { name: 'ISC2 CC', level: 90, x: 35, y: 50, size: 'lg' },
  { name: 'Data Analytics', level: 82, x: 60, y: 48, size: 'lg' },

  // Row 4 — under the basket
  { name: 'Figma', level: 80, x: 15, y: 65, size: 'sm' },
  { name: 'ServiceNow', level: 85, x: 38, y: 68, size: 'sm' },
  { name: 'Machine Learning', level: 70, x: 62, y: 66, size: 'md' },
  { name: 'Gen AI / LLMs', level: 72, x: 85, y: 62, size: 'md' },

  // Row 5 — baseline
  { name: 'Swift/iOS', level: 65, x: 10, y: 82, size: 'sm' },
  { name: 'Vuforia', level: 82, x: 30, y: 85, size: 'sm' },
  { name: 'Git', level: 88, x: 52, y: 82, size: 'sm' },
  { name: 'Excel', level: 90, x: 75, y: 85, size: 'sm' },
  { name: 'Active Dir.', level: 80, x: 92, y: 80, size: 'sm' },
];

function getZoneClass(level) {
  if (level >= 85) return 'hot-zone';
  if (level >= 70) return 'warm-zone';
  return 'cold-zone';
}

function getTextColor(level) {
  if (level >= 85) return 'text-mamba-gold';
  if (level >= 70) return 'text-mamba-purple';
  return 'text-mamba-muted';
}

function getSize(size) {
  if (size === 'lg') return 'w-20 h-20 md:w-24 md:h-24';
  if (size === 'md') return 'w-16 h-16 md:w-20 md:h-20';
  return 'w-14 h-14 md:w-16 md:h-16';
}

export default function ShotChart() {
  return (
    <section id="shotchart" className="px-6 md:px-16 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Scouting Report
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2"
      >
        Shot Chart
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sm text-mamba-muted mb-4 max-w-lg"
      >
        Technical skills mapped as hot zones. The brighter the zone, the higher the proficiency.
      </motion.p>

      {/* Legend */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-mamba-gold/40" />
          <span className="text-[10px] font-mono text-mamba-muted">Hot (85%+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-mamba-purple/40" />
          <span className="text-[10px] font-mono text-mamba-muted">Warm (70–84%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-mamba-hint/30" />
          <span className="text-[10px] font-mono text-mamba-muted">Developing (&lt;70%)</span>
        </div>
      </div>

      <div className="half-court mb-6" />

      {/* Court / Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-mamba-darker rounded-2xl border border-mamba-border overflow-hidden"
      >
        {/* Basketball half-court markings */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Outer court border */}
          <div className="absolute top-[4%] left-[4%] right-[4%] bottom-[4%] border border-mamba-border/20 rounded-sm" />

          {/* Baseline (bottom) */}
          <div className="absolute bottom-[4%] left-[4%] right-[4%] h-[1px] bg-mamba-border/30" />

          {/* Backboard + Rim at bottom center */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-12 h-[2px] bg-mamba-border/40" />
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-mamba-gold/30 rounded-full translate-y-[-100%]" />

          {/* Paint / Key area */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[30%] h-[28%] border border-mamba-border/25" />

          {/* Free-throw circle */}
          <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-[30%] aspect-square rounded-full border border-mamba-border/15" style={{ clipPath: 'inset(50% 0 0 0)' }} />
          <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-[30%] aspect-square rounded-full border border-dashed border-mamba-border/10" style={{ clipPath: 'inset(0 0 50% 0)' }} />

          {/* Three-point arc */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Three-point line */}
            <path d="M 68 288 L 68 220 Q 68 60 200 40 Q 332 60 332 220 L 332 288" stroke="currentColor" strokeWidth="1" className="text-mamba-border/20" fill="none" />
          </svg>

          {/* Restricted area arc (small arc near rim) */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[12%] aspect-square rounded-full border border-mamba-border/15" style={{ clipPath: 'inset(0 0 50% 0)' }} />
        </div>

        {/* Skill zones */}
        {zones.map((zone, i) => (
          <motion.div
            key={zone.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.4, type: 'spring' }}
            className={`absolute ${getZoneClass(zone.level)} ${getSize(zone.size)} rounded-full flex flex-col items-center justify-center cursor-default group`}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className={`font-mono text-[9px] md:text-[10px] font-bold ${getTextColor(zone.level)} text-center leading-tight`}>
              {zone.name}
            </span>
            <span className={`font-mono text-[8px] ${getTextColor(zone.level)} opacity-60`}>
              {zone.level}%
            </span>

            {/* Hover tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-mamba-black border border-mamba-border text-[9px] font-mono text-mamba-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {zone.name}: {zone.level}% proficiency
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
