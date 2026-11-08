'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-8 md:py-12 px-6 md:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-4xl overflow-hidden bg-rich-black px-8 md:px-16 py-16 md:py-24 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow effect */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,166,107,0.4) 0%, transparent 70%)',
            }}
          />

          {/* Top gold hairline */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gold-gradient opacity-60" />

          <div className="relative z-10">
            <motion.p
              className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Ready to start?
            </motion.p>
            <motion.h2
              className="font-display text-5xl md:text-7xl font-semibold text-ivory leading-tight mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Let&apos;s Build Your{' '}
              <span className="italic text-gradient-gold">Next Project</span>
            </motion.h2>
            <motion.p
              className="font-body text-base text-ivory/50 max-w-lg mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Whether you have a detailed brief or just an idea on a napkin, we&apos;re ready to hear it.
              A 20-minute call is all it takes to get started.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold px-8 py-4 rounded-full font-semibold text-base"
              >
                Let&apos;s Build Together →
              </button>
              <a
                href="https://wa.me/919552050093?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Atrilora."
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold text-ivory/50 hover:text-ivory transition-colors duration-200 flex items-center gap-2"
              >
                <span>Or chat on WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
