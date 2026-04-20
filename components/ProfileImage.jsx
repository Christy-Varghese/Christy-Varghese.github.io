/**
 * @file ProfileImage.jsx — Mamba Profile Portrait
 * @description Circular profile image with Lakers-themed gold border,
 *   purple glow aura, and Framer Motion hover animation.
 *   Responsive sizing: 192px desktop → 128px mobile.
 */

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * @param {{ src?: string, alt?: string, className?: string }} props
 */
export default function ProfileImage({
  src = '/image_1.png',
  alt = 'Christy Varghese — IT Professional & Data Analyst',
  className = '',
}) {
  return (
    <motion.div
      initial={{
        scale: 1,
        boxShadow:
          '0 0 20px rgba(85,37,131,0.5), 0 0 40px rgba(85,37,131,0.25), 0 20px 25px -5px rgba(0,0,0,0.3)',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          '0 0 30px rgba(85,37,131,0.7), 0 0 60px rgba(85,37,131,0.4), 0 20px 25px -5px rgba(0,0,0,0.4)',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`
        relative w-32 h-32 md:w-48 md:h-48
        rounded-full
        border-[3px] border-mamba-gold
        overflow-hidden
        cursor-pointer
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 128px, 192px"
        className="object-cover object-top"
        priority
      />
    </motion.div>
  );
}
