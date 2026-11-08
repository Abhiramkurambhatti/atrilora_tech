'use client';

const techItems = [
  'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'TypeScript',
  'PostgreSQL', 'Firebase', 'AWS', 'AI / LLM', 'Figma', 'Tailwind CSS',
  'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'TypeScript',
  'PostgreSQL', 'Firebase', 'AWS', 'AI / LLM', 'Figma', 'Tailwind CSS',
];

export default function TechMarquee() {
  return (
    <section className="py-16 bg-rich-black overflow-hidden">
      <div className="mb-6 text-center">
        <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold/60 uppercase">
          Technologies & Capabilities
        </p>
      </div>

      <div className="relative">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-rich-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-rich-black to-transparent" />

        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {techItems.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-6 mx-6 flex-shrink-0"
            >
              <span
                className="font-body text-sm font-medium px-4 py-2 rounded-full border border-gold/20 text-ivory/60 hover:text-ivory hover:border-gold/60 transition-all duration-200"
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
