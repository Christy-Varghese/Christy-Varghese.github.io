'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [morphing, setMorphing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMorphing(true), 800);
    const t2 = setTimeout(() => setLoading(false), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-mamba-darker"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Spinning basketball → data ring */}
          <motion.div
            className={`${morphing ? 'loader-ball morphing' : 'loader-ball'}`}
            animate={morphing ? { borderRadius: '50%', scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.4 }}
          />

          {/* Text */}
          <motion.div
            className="mt-6 font-headline text-sm uppercase tracking-[0.3em] text-mamba-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {morphing ? 'Processing Data...' : 'Warming Up...'}
          </motion.div>

          {/* Jersey numbers */}
          <motion.div
            className="mt-4 flex items-center gap-4 font-headline text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-mamba-purple">8</span>
            <span className="text-mamba-muted text-2xl">/</span>
            <span className="text-mamba-gold">24</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
