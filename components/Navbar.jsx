/**
 * @file Navbar.jsx — Fixed Top Navigation
 * @description Sticky navigation bar with desktop link row and mobile hamburger
 *              overlay. Shows a blur backdrop once the user scrolls past 50px.
 *              Logo displays "CV" with Kobe's jersey numbers (8 / 24).
 *              Navigation items map to section anchors (#tip-off, #stats, etc.).
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/** Section anchor links displayed in the navbar */
const navItems = [
  { label: 'Tip-Off', href: '#tip-off' },
  { label: 'Stats', href: '#stats' },
  { label: 'Playbook', href: '#playbook' },
  { label: 'Training', href: '#training' },
  { label: 'Shot Chart', href: '#shotchart' },
  { label: 'Awards', href: '#awards' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-mamba-darker/90 backdrop-blur-lg border-b border-mamba-border/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#tip-off" className="flex items-center gap-2">
            <span className="font-headline text-lg font-bold text-mamba-gold">CV</span>
            <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-mamba-hint">
              <span className="text-mamba-purple font-bold">8</span>
              <span>/</span>
              <span className="text-mamba-gold font-bold">24</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-mamba-muted hover:text-mamba-gold hover:bg-mamba-card transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-mamba-muted hover:text-mamba-gold transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[99] bg-mamba-darker/95 backdrop-blur-xl pt-16"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="w-full text-center py-3 font-headline text-xl uppercase tracking-wide text-mamba-muted hover:text-mamba-gold transition-colors border-b border-mamba-border/20"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
