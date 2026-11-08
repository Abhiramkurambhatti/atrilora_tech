'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/theme';

const icons: Record<string, React.ReactNode> = {
  monitor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  smartphone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 7h7l-6 4 2 7-5-4-5 4 2-7-6-4h7z" />
      <path d="M5 7l1 3M19 7l-1 3" />
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  megaphone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
};

// Bento layout: 5 cards in a 3+2 grid
const bentoLayout = [
  { colSpan: 'md:col-span-2', rowSpan: '' },   // Web - wide
  { colSpan: '', rowSpan: '' },                   // Mobile
  { colSpan: '', rowSpan: 'md:row-span-2' },      // AI - tall
  { colSpan: 'md:col-span-2', rowSpan: '' },   // Branding - wide
  { colSpan: '', rowSpan: '' },                   // Marketing
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-gradient" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">What We Do</p>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight">
            Services built for <br />
            <span className="italic text-gradient-gold">real results</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {services.map((service, i) => {
            const layout = bentoLayout[i];
            const isHovered = hoveredId === service.id;
            return (
              <motion.div
                key={service.id}
                className={`${layout.colSpan} ${layout.rowSpan} relative rounded-3xl overflow-hidden cursor-default group`}
                style={{ background: service.color }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -4 }}
              >
                {/* Card content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered
                          ? 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)'
                          : 'rgba(154, 123, 79, 0.1)',
                        color: isHovered ? '#FBF7F1' : '#9A7B4F',
                      }}
                    >
                      {icons[service.icon]}
                    </div>
                    <h3 className="font-body text-lg font-bold text-rich-black mb-2">{service.title}</h3>
                    <p className="font-body text-sm text-rich-black/55 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Hover CTA */}
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -8 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-body text-xs font-semibold text-gold">Learn more</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#9A7B4F" strokeWidth="1.5">
                      <path d="M2 7h10M9 4l3 3-3 3" />
                    </svg>
                  </motion.div>
                </div>

                {/* Border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-gold/0 group-hover:border-gold/20 transition-all duration-300"
                />

                {/* Soft shadow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.06)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
