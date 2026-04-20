'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Globe, Youtube } from 'lucide-react';
import ModeToggle from './ModeToggle';

const links = [
  { icon: <Mail size={14} />, label: 'christyvarghese@outlook.com', href: 'mailto:christyvarghese@outlook.com' },
  { icon: <Phone size={14} />, label: '+1 548 881 2601', href: 'tel:+15488812601' },
  { icon: <Linkedin size={14} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/christy-varghese/' },
  { icon: <Github size={14} />, label: 'GitHub', href: 'https://github.com/Christy-Varghese' },
  { icon: <Globe size={14} />, label: 'christyvarghese.me', href: 'https://christyvarghese.me' },
  { icon: <Youtube size={14} />, label: 'MegaMamba', href: 'https://youtube.com/MegaMamba' },
];

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-16 lg:px-24 py-16 border-t border-mamba-border/40">
      {/* Background number */}
      <div className="absolute right-8 bottom-4 font-headline text-[8rem] font-bold text-mamba-purple/[0.03] leading-none pointer-events-none select-none">
        24
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        {/* Left: identity */}
        <div>
          <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-1">
            Christy Varghese
          </h3>
          <p className="text-sm text-mamba-muted mb-4">
            IT · Cybersecurity · AR · Data Analytics
          </p>
          <p className="text-xs text-mamba-hint font-mono mb-6">
            London, Ontario, Canada
          </p>

          {/* 8/24 Toggle */}
          <ModeToggle />
        </div>

        {/* Center: links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 text-xs text-mamba-hint hover:text-mamba-gold transition-colors font-mono"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: quote */}
        <div className="max-w-xs">
          <blockquote className="pl-3 border-l-2 border-mamba-purple/40">
            <p className="text-xs italic text-mamba-muted/60 leading-relaxed">
              &ldquo;The moment you give up is the moment you let someone else win.&rdquo;
            </p>
            <cite className="mt-1 block text-[10px] text-mamba-gold/40 not-italic font-mono">
              — Kobe Bryant
            </cite>
          </blockquote>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="half-court mt-10 mb-4" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-[10px] text-mamba-hint font-mono">
          © 2026 Christy Varghese. Built with Mamba Mentality.
        </span>
        <div className="flex items-center gap-4">
          <span className="font-headline text-xs text-mamba-purple/30 font-bold">8</span>
          <span className="text-mamba-border">|</span>
          <span className="font-headline text-xs text-mamba-gold/30 font-bold">24</span>
        </div>
      </div>
    </footer>
  );
}
