'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-3 top-0 z-50 hidden h-screen w-6 items-center lg:flex">
      {/* Court sideline */}
      <div className="relative h-[80vh] w-[2px] rounded-full bg-mamba-border/40 mx-auto">
        {/* Half-court mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-mamba-purple/50" />

        {/* Free-throw line top */}
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-2 h-[1px] bg-mamba-border/30" />

        {/* Free-throw line bottom */}
        <div className="absolute left-1/2 top-[80%] -translate-x-1/2 w-2 h-[1px] bg-mamba-border/30" />

        {/* Basketball indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{ top: `${scrollPct}%` }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Ball */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-mamba-gold to-yellow-700 shadow-lg shadow-mamba-gold/20 flex items-center justify-center">
              {/* Seam lines */}
              <div className="absolute w-full h-[1px] bg-mamba-black/30 rotate-45" />
              <div className="absolute w-full h-[1px] bg-mamba-black/30 -rotate-45" />
            </div>

            {/* Glow ring */}
            <div className="absolute inset-[-3px] rounded-full border border-mamba-gold/20 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Score labels */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-mamba-hint tracking-wider">
        TIP
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-mamba-hint tracking-wider">
        FIN
      </div>
    </div>
  );
}
