'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { portfolioItems } from '@/lib/theme';

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-sand">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-gradient" />
              <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Selected Work</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight">
              Projects we&apos;re<br />
              <span className="italic text-gradient-gold">proud of</span>
            </h2>
          </div>
          <p className="font-body text-sm text-rich-black/50 max-w-xs leading-relaxed">
            Each project represents a real challenge solved, a business moved forward.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-none"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-rich-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-body text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-ivory backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-xs font-semibold tracking-[0.2em] text-gold/80 uppercase mb-1">{item.category}</p>
                <h3 className="font-display text-3xl font-semibold text-ivory">{item.title}</h3>
                <motion.p
                  className="font-body text-sm text-ivory/60 mt-2 leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={hoveredId === item.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.desc}
                </motion.p>
              </div>

              {/* View label on hover */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center font-body text-sm font-bold text-rich-black"
                      style={{ background: 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)' }}
                    >
                      View
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-dark px-8 py-4 rounded-full font-semibold text-sm"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
