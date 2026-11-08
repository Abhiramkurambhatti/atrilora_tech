'use client';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: '⚡',
    title: 'End-to-End Solution',
    desc: 'Strategy to launch — one team, zero handoff gaps.',
  },
  {
    icon: '🏢',
    title: 'For Startups & Businesses',
    desc: 'From zero to funded — we meet you where you are.',
  },
  {
    icon: '📈',
    title: 'Design to Growth',
    desc: 'Beautiful and functional. Built to convert and scale.',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-sand py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={`flex items-center gap-5 py-4 ${
                i < pillars.length - 1 ? 'md:border-r md:border-gold/20 md:pr-10 md:mr-10' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <h3 className="font-body text-sm font-bold text-rich-black tracking-wide">{p.title}</h3>
                <p className="font-body text-sm text-rich-black/55 mt-0.5 leading-snug">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
