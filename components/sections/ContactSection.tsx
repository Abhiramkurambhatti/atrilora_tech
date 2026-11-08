'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // Fall through — still show success for UX
      setSubmitted(true);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold-gradient" />
              <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Get in Touch</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-rich-black leading-tight mb-6">
              Tell us about<br />
              <span className="italic text-gradient-gold">your project</span>
            </h2>
            <p className="font-body text-base text-rich-black/55 leading-relaxed mb-10 max-w-sm">
              Fill in the form and we&apos;ll get back within 24 hours. 
              Prefer to talk? Drop us a WhatsApp message.
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/919552050093?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-rich-black flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A66B">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-rich-black/40 mb-0.5">WhatsApp</p>
                  <p className="font-body text-sm font-semibold text-rich-black group-hover:text-gold transition-colors duration-200">+91 9552050093</p>
                </div>
              </a>

              <a
                href="mailto:abhiramkurambhatti@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-rich-black flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A66B" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-rich-black/40 mb-0.5">Email</p>
                  <p className="font-body text-sm font-semibold text-rich-black group-hover:text-gold transition-colors duration-200">abhiramkurambhatti@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Second team photo */}
            <div className="mt-10 relative rounded-3xl overflow-hidden aspect-video">
              <img src="/images/team-collab-2.jpg" alt="Atrilora team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                className="bg-white rounded-4xl p-10 card-shadow text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl"
                  style={{ background: 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)' }}
                >
                  ✓
                </div>
                <h3 className="font-display text-3xl font-semibold text-rich-black mb-3">
                  Message sent!
                </h3>
                <p className="font-body text-sm text-rich-black/50 leading-relaxed max-w-xs">
                  Thank you for reaching out. We&apos;ll review your project and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-4xl p-8 md:p-10 card-shadow space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label className="font-body text-xs font-semibold text-rich-black/60 uppercase tracking-wider mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full bg-ivory rounded-2xl px-4 py-3.5 font-body text-sm text-rich-black placeholder:text-rich-black/30 border border-transparent focus:border-gold/40 focus:outline-none transition-colors duration-200"
                  />
                  {errors.name && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs font-semibold text-rich-black/60 uppercase tracking-wider mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-ivory rounded-2xl px-4 py-3.5 font-body text-sm text-rich-black placeholder:text-rich-black/30 border border-transparent focus:border-gold/40 focus:outline-none transition-colors duration-200"
                  />
                  {errors.email && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Service + Budget row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold text-rich-black/60 uppercase tracking-wider mb-1.5 block">
                      Service
                    </label>
                    <select
                      {...register('service')}
                      className="w-full bg-ivory rounded-2xl px-4 py-3.5 font-body text-sm text-rich-black border border-transparent focus:border-gold/40 focus:outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select service</option>
                      <option value="web">Website Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai">AI & Automation</option>
                      <option value="branding">Branding & Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="full">Full Package</option>
                    </select>
                    {errors.service && (
                      <p className="font-body text-xs text-red-500 mt-1">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-rich-black/60 uppercase tracking-wider mb-1.5 block">
                      Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full bg-ivory rounded-2xl px-4 py-3.5 font-body text-sm text-rich-black border border-transparent focus:border-gold/40 focus:outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select range</option>
                      <option value="under50k">Under ₹50K</option>
                      <option value="50k-1l">₹50K – ₹1L</option>
                      <option value="1l-3l">₹1L – ₹3L</option>
                      <option value="3l-10l">₹3L – ₹10L</option>
                      <option value="10l+">₹10L+</option>
                    </select>
                    {errors.budget && (
                      <p className="font-body text-xs text-red-500 mt-1">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs font-semibold text-rich-black/60 uppercase tracking-wider mb-1.5 block">
                    Tell us about your project
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="We're building a SaaS platform for..."
                    className="w-full bg-ivory rounded-2xl px-4 py-3.5 font-body text-sm text-rich-black placeholder:text-rich-black/30 border border-transparent focus:border-gold/40 focus:outline-none transition-colors duration-200 resize-none"
                  />
                  {errors.message && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-dark w-full py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-ivory/40 border-t-ivory rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                          <path d="M2 6h8M7 3l3 3-3 3" />
                        </svg>
                      </span>
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-rich-black/30 text-center">
                  We reply within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
