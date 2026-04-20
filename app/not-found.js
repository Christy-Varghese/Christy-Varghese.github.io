/**
 * @file not-found.js — Custom 404 Page (Mamba Theme)
 * @description Themed 404 page matching the Black Mamba portfolio design.
 *   Shows a basketball-inspired "airball" message with navigation back home.
 */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center court-bg">
      {/* Background jersey numbers */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-10 top-10 font-headline text-[16rem] md:text-[24rem] font-bold text-mamba-purple/[0.04] leading-none">
          404
        </div>
      </div>

      {/* Quarter badge */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-[1px] w-8 bg-mamba-gold" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mamba-gold">
          Airball
        </span>
        <div className="h-[1px] w-8 bg-mamba-gold" />
      </div>

      {/* 404 number */}
      <h1 className="font-headline text-8xl md:text-9xl font-bold uppercase leading-none tracking-tight mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mamba-gold via-yellow-400 to-mamba-gold glow-gold">
          404
        </span>
      </h1>

      {/* Message */}
      <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-mamba-white mb-4">
        Shot Missed
      </h2>
      <p className="text-sm md:text-base text-mamba-muted max-w-md mb-8 leading-relaxed">
        This page doesn&apos;t exist — like an airball in the fourth quarter.
        But a true Mamba gets back on defense.
      </p>

      {/* Kobe quote */}
      <blockquote className="relative pl-4 border-l-2 border-mamba-gold/40 max-w-md mb-10 text-left">
        <p className="text-sm italic text-mamba-muted/70 leading-relaxed">
          &ldquo;I have nothing in common with lazy people who blame others for
          their lack of success.&rdquo;
        </p>
        <cite className="mt-2 block text-xs text-mamba-gold/60 not-italic font-mono">
          — Kobe Bryant
        </cite>
      </blockquote>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-mamba-purple text-white font-medium text-sm hover:bg-mamba-purple/80 hover:shadow-lg hover:shadow-mamba-purple/20 transition-all duration-300"
      >
        ← Back to the Court
      </Link>

      {/* Bottom badge */}
      <div className="mt-12 flex items-center gap-4">
        <span className="font-headline text-xs text-mamba-purple/30 font-bold">8</span>
        <span className="text-mamba-border">|</span>
        <span className="font-headline text-xs text-mamba-gold/30 font-bold">21</span>
      </div>
    </div>
  );
}
