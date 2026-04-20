'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, badge, description, stats, tags, link, linkLabel, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="swish-card group bg-mamba-card border border-mamba-border rounded-2xl p-6 hover:border-mamba-gold/40 transition-all duration-300 cursor-pointer"
    >
      {/* Net overlay (swish effect) */}
      <div className="net-overlay" />

      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mamba-gold-dim/60 border border-mamba-gold/20 mb-4">
          <span className="text-xs font-mono text-mamba-gold">{badge}</span>
        </div>
      )}

      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-mamba-white group-hover:text-mamba-gold transition-colors duration-300">
          {title}
        </h3>
        {icon && (
          <span className="text-2xl flex-shrink-0">{icon}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-mamba-muted leading-relaxed mb-4">
        {description}
      </p>

      {/* Stats line */}
      {stats && (
        <div className="flex flex-wrap gap-3 mb-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-mamba-gold">{s.value}</span>
              <span className="font-mono text-[10px] text-mamba-hint uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
              tag.color === 'purple'
                ? 'bg-mamba-purple-dim/40 text-mamba-purple border-mamba-purple/20'
                : tag.color === 'gold'
                ? 'bg-mamba-gold-dim/40 text-mamba-gold border-mamba-gold/20'
                : 'bg-mamba-darker text-mamba-muted border-mamba-border'
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-mamba-purple hover:text-mamba-gold transition-colors"
        >
          {linkLabel || 'View project'} ↗
        </a>
      )}

      {/* Bottom gold line glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mamba-gold/0 to-transparent group-hover:via-mamba-gold/40 transition-all duration-500" />
    </motion.div>
  );
}
