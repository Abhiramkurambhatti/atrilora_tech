'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    num: '01',
    title: 'You talk to the builder, not an account manager',
    desc: "Every project is handled directly by our senior team. No relay races, no diluted briefs. When you share an idea, the person building it is in the same conversation.",
  },
  {
    num: '02',
    title: 'We design for conversion, not just aesthetics',
    desc: "Beautiful work that also performs. Every layout decision is made with your user\'s journey in mind — what gets them to the next step, and why.",
  },
  {
    num: '03',
    title: 'We integrate AI where it actually helps',
    desc: "No buzzwords, no retrofitted chatbots. We identify specific tasks in your workflow that automation can handle better and cheaper, then we build those.",
  },
  {
    num: '04',
    title: 'Full ownership, zero lock-in',
    desc: "You own every line of code, every design file, every asset. We hand everything over. Your business, your tools.",
  },
  {
    num: '05',
    title: 'We stay after launch',
    desc: "Go-live is not the end. We monitor, support and iterate because we know the first version is never the final one.",
  },
];

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '-40px']);

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Sticky header + photo */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold-gradient" />
                <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Why Atrilora</p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight mb-6">
                Not just another<br />
                <span className="italic text-gradient-gold">digital agency</span>
              </h2>
              <p className="font-body text-base text-rich-black/55 leading-relaxed mb-10 max-w-sm">
                We work the way a co-founder would — close to the problem, invested in the outcome, and honest about trade-offs.
              </p>
            </motion.div>

            {/* Team photo */}
            <motion.div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/team-collab-3.jpg"
                alt="Atrilora team collaborating"
                fill
                className="object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/20 to-transparent" />

              {/* Floating stat badge */}
              <div className="absolute bottom-5 left-5 glass rounded-2xl px-5 py-3">
                <p className="font-body text-xs text-rich-black/50 mb-1">Projects delivered</p>
                <div className="flex items-baseline gap-1">
                  <CounterNumber target={30} />
                  <span className="font-display text-2xl font-semibold text-rich-black">+</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Animated reasons */}
          <div className="space-y-6 pt-4 lg:pt-16">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.num}
                className="bg-white rounded-3xl p-7 card-shadow group hover:card-shadow-hover transition-shadow duration-300"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-body text-xs font-bold text-gold/50 mt-1 flex-shrink-0 w-6">{reason.num}</span>
                  <div>
                    <h3 className="font-body text-base font-bold text-rich-black mb-2 group-hover:text-gradient-gold transition-all duration-300">
                      {reason.title}
                    </h3>
                    <p className="font-body text-sm text-rich-black/55 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterNumber({ target }: { target: number }) {
  return (
    <motion.span
      className="font-display text-3xl font-bold text-rich-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {target}
    </motion.span>
  );
}
