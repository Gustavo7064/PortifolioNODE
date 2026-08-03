import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { about } from '@/data/content';

const badges = [
  'Desenvolvedor Back-end',
  'Técnico em Desenvolvimento de Sistemas',
  'Tecnólogo em IA (em curso)',
];

export default function About() {
  return (
    <section id="sobre" className="section-shell py-24 md:py-32">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
        <SectionHeading
          eyebrow={about.eyebrow}
          title="De volta ao básico: aprender, construir, repetir."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full text-xs font-mono glass text-cyan-300"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="body-muted text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
