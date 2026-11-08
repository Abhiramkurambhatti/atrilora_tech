'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/lib/theme';

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);

  return (
    <section id="process" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-gradient" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">How We Work</p>
            <div className="h-px w-8 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight">
            Our <span className="italic text-gradient-gold">process</span>
          </h2>
          <p className="font-body text-base text-rich-black/50 mt-4 max-w-md mx-auto">
            Clear steps. No surprises. Just a steady, collaborative process from first call to live product.
          </p>
        </motion.div>

        {/* Timeline — desktop */}
        <div className="hidden md:flex gap-0 relative">
          {/* Background track */}
          <div className="absolute top-8 left-[7%] right-[7%] h-px bg-sand" />
          {/* Animated fill */}
          <motion.div
            className="absolute top-8 left-[7%] h-px origin-left"
            style={{
              right: '7%',
              scaleX: lineHeight as unknown as number,
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, #C9A66B 0%, #8A6A3C 100%)',
            }}
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex-1 flex flex-col items-center text-center px-4 relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Dot */}
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-sand bg-ivory flex items-center justify-center mb-6 relative z-10"
                whileInView={{
                  borderColor: '#C9A66B',
                  background: 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)',
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.4, duration: 0.5 }}
              >
                <span className="font-body text-sm font-bold text-ivory">{step.step}</span>
              </motion.div>

              <h3 className="font-body text-lg font-bold text-rich-black mb-2">{step.title}</h3>
              <p className="font-body text-sm text-rich-black/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline — mobile (vertical) */}
        <div className="md:hidden relative pl-8">
          {/* Animated line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-sand" />
          <motion.div
            className="absolute left-3 top-0 w-px origin-top"
            style={{
              height: lineHeight,
              background: 'linear-gradient(to bottom, #C9A66B, #8A6A3C)',
            }}
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Mobile dot */}
              <div
                className="absolute -left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center z-10"
                style={{ background: 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)' }}
              >
                <span className="font-body text-[9px] font-bold text-ivory">{i + 1}</span>
              </div>

              <div className="bg-white rounded-2xl p-5 card-shadow">
                <h3 className="font-body text-base font-bold text-rich-black mb-1">{step.title}</h3>
                <p className="font-body text-sm text-rich-black/50 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
