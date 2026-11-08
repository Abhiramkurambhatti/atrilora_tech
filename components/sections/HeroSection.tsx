'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const marqueeItems = [
  'Design', '·', 'Develop', '·', 'Automate', '·', 'Grow',
  'Design', '·', 'Develop', '·', 'Automate', '·', 'Grow',
  'Design', '·', 'Develop', '·', 'Automate', '·', 'Grow',
  'Design', '·', 'Develop', '·', 'Automate', '·', 'Grow',
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 3.0 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-ivory"
    >
      {/* Background hero image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale: 1.1 }}
      >
        <Image
          src="/images/hero-desk.jpg"
          alt="Atrilora workspace"
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.92) saturate(0.9)' }}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/70 to-ivory/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 via-transparent to-transparent" />
      </motion.div>

      {/* Animated canvas background aurora (fallback / overlay) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl -top-20 -right-20"
          style={{
            background: 'radial-gradient(circle, rgba(201,166,107,0.4) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bottom-0 -left-20"
          style={{
            background: 'radial-gradient(circle, rgba(201,166,107,0.3) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-16 flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-gradient" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Digital Agency for Startups
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-semibold text-rich-black leading-[1.05] mb-6"
          >
            Build, Automate &amp; Grow Your{' '}
            <span className="italic-gold">Business Online</span>
          </motion.h1>

          {/* Gold swoosh underline */}
          <motion.div
            variants={fadeUp}
            className="mb-6"
          >
            <svg width="260" height="12" viewBox="0 0 260 12" fill="none" className="ml-0">
              <motion.path
                d="M2 8 Q65 2 130 6 Q195 10 258 4"
                stroke="url(#heroSwoosh)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 3.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="heroSwoosh" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C9A66B" />
                  <stop offset="100%" stopColor="#8A6A3C" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg md:text-xl text-rich-black/60 leading-relaxed mb-10 max-w-lg"
          >
            A one-stop partner for Web, Apps, AI, Branding and Digital Growth. 
            We build what your business needs and stay to help it scale.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn-dark px-7 py-4 rounded-full font-semibold text-base flex items-center gap-2 group"
            >
              Let&apos;s Build Your Next Project
              <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight />
              </span>
            </button>
            <button
              onClick={scrollToWork}
              className="font-body text-sm font-semibold text-rich-black/60 hover:text-rich-black transition-colors duration-200 flex items-center gap-2 group"
            >
              View Our Work
              <span className="w-4 h-px bg-rich-black/40 group-hover:w-6 group-hover:bg-rich-black transition-all duration-300" />
            </button>
          </motion.div>

          {/* Trust micro-badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            {['End-to-End', 'On-time delivery', '10+ Startups helped'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 font-body text-xs text-rich-black/50">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating Device Mockup */}
        <motion.div
          className="hidden lg:block flex-shrink-0 relative ml-8"
          initial={{ opacity: 0, x: 48, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.4, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          {/* Device frame */}
          <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-card-hover border border-white/40">
            <Image
              src="/images/hero-desk.jpg"
              alt="Project preview"
              fill
              className="object-cover"
            />
            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-2.5 shadow-card"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-body text-xs font-semibold text-rich-black">🚀 Live in 3 weeks</p>
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-6 glass rounded-xl px-4 py-2.5 shadow-card"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <p className="font-body text-xs font-semibold text-rich-black">⭐ 5.0 rated</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <motion.div
        className="relative z-10 bg-rich-black py-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6 }}
      >
        <div className="flex whitespace-nowrap marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className={`font-body text-sm font-medium mx-4 ${
                item === '·' ? 'text-gold' : 'text-ivory/70'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 6h8M7 3l3 3-3 3" />
    </svg>
  );
}
