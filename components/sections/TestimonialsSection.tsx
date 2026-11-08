'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/theme';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-gradient" />
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Client Stories</p>
            <div className="h-px w-8 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight">
            Words from <span className="italic text-gradient-gold">founders</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-white rounded-4xl p-10 md:p-14 card-shadow"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote mark */}
              <svg
                className="mb-6 text-gold/20"
                width="48" height="36"
                viewBox="0 0 48 36" fill="currentColor"
              >
                <path d="M0 36V21.6C0 9.6 7.2 3.2 21.6 0l2.4 4.8C16.8 6.4 12.4 10.4 12 16.8H20V36H0ZM28 36V21.6C28 9.6 35.2 3.2 49.6 0L52 4.8C44.8 6.4 40.4 10.4 40 16.8H48V36H28Z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A66B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-2xl md:text-3xl font-normal text-rich-black leading-relaxed mb-10 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-body text-sm font-bold text-rich-black">{t.name}</p>
                  <p className="font-body text-xs text-rich-black/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold' : 'w-2 bg-rich-black/20'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-rich-black/20 hover:border-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 4L6 8l4 4" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-rich-black/20 hover:border-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
