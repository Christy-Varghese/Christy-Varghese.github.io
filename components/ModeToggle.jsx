'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const isMamba = mode === 'mamba';

  return (
    <motion.button
      onClick={toggleMode}
      className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full border border-mamba-border bg-mamba-card hover:border-mamba-gold/40 transition-all duration-300"
      whileTap={{ scale: 0.95 }}
      title={isMamba ? 'Switch to Rookie Mode (#8)' : 'Switch to Black Mamba Mode (#24)'}
    >
      {/* Jersey numbers */}
      <span
        className={`font-headline text-lg font-bold transition-all duration-300 ${
          !isMamba ? 'text-mamba-purple scale-110' : 'text-mamba-hint scale-90 opacity-50'
        }`}
      >
        8
      </span>

      {/* Toggle track */}
      <div className="relative w-12 h-6 rounded-full bg-mamba-darker border border-mamba-border overflow-hidden">
        {/* Track fill */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isMamba
              ? 'linear-gradient(90deg, #333, #1A1A1A)'
              : 'linear-gradient(90deg, #552583, #7a45b8)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Toggle ball */}
        <motion.div
          className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center shadow-md"
          animate={{
            left: isMamba ? '26px' : '2px',
            background: isMamba ? '#FDB927' : '#FDB927',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {/* Ball seams */}
          <div className="w-full h-[1px] bg-orange-700/40 rotate-45 absolute" />
          <div className="w-full h-[1px] bg-orange-700/40 -rotate-45 absolute" />
        </motion.div>
      </div>

      <span
        className={`font-headline text-lg font-bold transition-all duration-300 ${
          isMamba ? 'text-mamba-gold scale-110' : 'text-mamba-hint scale-90 opacity-50'
        }`}
      >
        24
      </span>

      {/* Label */}
      <span className="font-mono text-[10px] uppercase tracking-wider text-mamba-hint ml-1 hidden sm:inline">
        {isMamba ? 'Mamba' : 'Rookie'}
      </span>
    </motion.button>
  );
}
