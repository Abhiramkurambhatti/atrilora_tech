'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated A logo mark */}
            <svg
              width="80"
              height="88"
              viewBox="0 0 80 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              {/* A shape */}
              <motion.path
                d="M40 4L6 84H20L28 64H52L60 84H74L40 4Z M32 52L40 28L48 52H32Z"
                stroke="url(#goldGrad)"
                strokeWidth="2"
                fill="url(#goldGradFill)"
                fillOpacity="0.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Gold swoosh underline */}
              <motion.path
                d="M8 92 Q40 82 72 92"
                stroke="url(#goldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9A66B" />
                  <stop offset="100%" stopColor="#8A6A3C" />
                </linearGradient>
                <linearGradient id="goldGradFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9A66B" />
                  <stop offset="100%" stopColor="#8A6A3C" />
                </linearGradient>
              </defs>
            </svg>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-body text-xs font-semibold tracking-[0.4em] text-rich-black/50 uppercase">
                ATRILORA TECHNOLOGIES
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div className="w-32 h-px bg-sand overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
