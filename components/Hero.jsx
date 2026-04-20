/**
 * @file Hero.jsx — Q1 "The Tip-Off"
 * @description Full-screen hero section with animated entrance. Features:
 *   - Background jersey numbers (8 & 21) as subtle watermarks
 *   - Gradient gold name with glow effect
 *   - Credential tags (ISC2 CC, IIT Roorkee, Meta Top 76, Location)
 *   - CTA buttons for LinkedIn, GitHub, and personal site
 *   - Scroll-down indicator with bouncing basketball animation
 */

'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Globe } from 'lucide-react';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="tip-off"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 court-bg overflow-hidden"
    >
      {/* Background jersey numbers */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -right-10 top-10 font-headline text-[20rem] md:text-[28rem] font-bold text-mamba-purple/[0.04] leading-none">
          21
        </div>
        <div className="absolute -left-5 bottom-0 font-headline text-[14rem] md:text-[20rem] font-bold text-mamba-gold/[0.03] leading-none">
          8
        </div>
      </div>

      {/* Quarter badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Q1 · The Tip-Off
        </span>
      </motion.div>

      {/* Main content row: text left, image right */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">

        {/* Left column — text content */}
        <div className="flex-1 min-w-0">

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.7, ease: 'easeOut' }}
        className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-6"
      >
        <span className="text-mamba-white">Christy</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mamba-gold via-yellow-400 to-mamba-gold glow-gold">
          Varghese
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="font-headline text-lg md:text-xl uppercase tracking-[0.15em] text-mamba-muted mb-6 max-w-2xl"
      >
        Mamba Mentality in Data & AI
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        className="text-base md:text-lg text-mamba-muted/80 max-w-xl mb-8 leading-relaxed"
      >
        3+ years of delivering measurable outcomes across IT support, cybersecurity,
        and augmented reality. Top 76 globally in Meta&apos;s SparkAR competition.
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="flex flex-wrap gap-3 mb-8"
      >
        {[
          { label: 'ISC2 CC · Cybersecurity', color: 'purple' },
          { label: 'IIT Roorkee · Data Analytics 2026', color: 'gold' },
          { label: 'Meta Top 76 · $1,500 Prize', color: 'gold' },
          { label: 'London, Ontario 🇨🇦', color: 'muted' },
        ].map((tag) => (
          <span
            key={tag.label}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
              tag.color === 'purple'
                ? 'bg-mamba-purple-dim/50 text-mamba-purple border-mamba-purple/30 hover:border-mamba-purple/60'
                : tag.color === 'gold'
                ? 'bg-mamba-gold-dim/50 text-mamba-gold border-mamba-gold/30 hover:border-mamba-gold/60'
                : 'bg-mamba-card text-mamba-muted border-mamba-border hover:border-mamba-hint'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.6 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        <a
          href="https://www.linkedin.com/in/christy-varghese/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-mamba-purple text-white font-medium text-sm hover:bg-mamba-purple/80 hover:shadow-lg hover:shadow-mamba-purple/20 transition-all duration-300"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://github.com/Christy-Varghese"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-mamba-border text-mamba-muted hover:text-mamba-white hover:border-mamba-gold/50 transition-all duration-300"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href="https://christyvarghese.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-mamba-border text-mamba-muted hover:text-mamba-white hover:border-mamba-purple/50 transition-all duration-300"
        >
          <Globe size={16} /> Portfolio
        </a>
      </motion.div>

        </div>{/* end left column */}

        {/* Right column — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.85, duration: 0.6, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center md:justify-end"
        >
          <ProfileImage className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64" />
        </motion.div>

      </div>{/* end content row */}

      {/* Kobe Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.8 }}
        className="relative pl-4 border-l-2 border-mamba-gold/40 max-w-lg"
      >
        <p className="text-sm italic text-mamba-muted/70 leading-relaxed">
          &ldquo;Everything negative—pressure, challenges—is all an opportunity for me to rise.&rdquo;
        </p>
        <cite className="mt-2 block text-xs text-mamba-gold/60 not-italic font-mono">
          — Kobe Bryant
        </cite>
      </motion.blockquote>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mamba-hint">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-mamba-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
