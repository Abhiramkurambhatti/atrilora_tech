'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass shadow-card px-6 py-3' : 'px-6 py-3'
        }`}>
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 group"
              aria-label="Atrilora home"
            >
              <LogoMark size={32} />
              <div className="hidden sm:block">
                <p className="font-body text-xs font-bold tracking-[0.25em] text-rich-black uppercase leading-none">
                  ATRILORA
                </p>
                <p className="font-body text-[9px] font-medium tracking-[0.2em] text-gold uppercase leading-none mt-0.5">
                  TECHNOLOGIES
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm font-medium text-rich-black/70 hover:text-rich-black transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="hidden lg:flex btn-dark px-5 py-2.5 rounded-full text-sm font-semibold items-center gap-2"
              >
                Let&apos;s Build
                <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <motion.span
                  className="block w-6 h-0.5 bg-rich-black rounded-full"
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-4 h-0.5 bg-rich-black rounded-full"
                  animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-rich-black rounded-full"
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center"
            initial={{ clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ delay: i * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-display text-5xl font-light text-rich-black hover:text-gradient-gold transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-dark mt-4 px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Let&apos;s Build Together
                </button>
              </motion.div>
            </nav>

            {/* Footer info */}
            <div className="absolute bottom-10 text-center">
              <p className="font-body text-sm text-rich-black/40">atrilora@gmail.com</p>
              <p className="font-body text-sm text-rich-black/40">+91 9552050093</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2L3 42H10L14 32H26L30 42H37L20 2Z M16 26L20 14L24 26H16Z"
        fill="url(#navGold)"
      />
      <path
        d="M4 46 Q20 41 36 46"
        stroke="url(#navGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="navGold" x1="0" y1="0" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A66B" />
          <stop offset="100%" stopColor="#8A6A3C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
