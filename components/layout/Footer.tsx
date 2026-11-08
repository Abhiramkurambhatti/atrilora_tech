'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-rich-black text-ivory py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="28" height="30" viewBox="0 0 40 44" fill="none">
                <path d="M20 2L3 42H10L14 32H26L30 42H37L20 2Z M16 26L20 14L24 26H16Z" fill="url(#footerGold)" />
                <path d="M4 46 Q20 41 36 46" stroke="url(#footerGold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="footerGold" x1="0" y1="0" x2="40" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C9A66B" />
                    <stop offset="100%" stopColor="#8A6A3C" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <p className="font-body text-xs font-bold tracking-[0.25em] text-ivory uppercase">ATRILORA</p>
                <p className="font-body text-[9px] font-medium tracking-[0.2em] text-gold uppercase">TECHNOLOGIES</p>
              </div>
            </div>
            <p className="font-body text-sm text-ivory/50 max-w-xs leading-relaxed">
              Design · Develop · Automate · Grow.<br />
              Your one-stop digital partner.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">Services</h4>
              <ul className="space-y-2">
                {['Website Development', 'Mobile Apps', 'AI & Automation', 'Branding', 'Digital Marketing'].map(s => (
                  <li key={s}>
                    <a href="#services" className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors duration-200">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">Company</h4>
              <ul className="space-y-2">
                {[['Work', '#work'], ['Process', '#process'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors duration-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919552050093"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                <WhatsAppIcon />
                +91 9552050093
              </a>
              <a
                href="mailto:abhiramkurambhatti@gmail.com"
                className="flex items-center gap-2 font-body text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                <MailIcon />
                abhiramkurambhatti@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-ivory/30">
            © {year} Atrilora Technologies. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/20">
            Design · Develop · Automate · Grow
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}
