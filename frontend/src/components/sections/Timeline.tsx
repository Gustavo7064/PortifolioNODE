import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { timeline } from '@/data/content';

export default function Timeline() {
  return (
    <section id="trajetoria" className="section-shell py-24 md:py-32">
      <SectionHeading
        eyebrow="Trajetória"
        title="Como cheguei até aqui"
        description="Uma linha do tempo real, sem atalhos — cada etapa somou na próxima."
      />

      <div className="relative">
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-cyan-400/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${entry.year}-${entry.title}`}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                  isLeft ? '' : ''
                }`}
              >
                <span className="absolute left-0 md:left-1/2 top-1 w-[14px] h-[14px] rounded-full bg-accent-gradient shadow-glow md:-translate-x-1/2 ring-4 ring-base-950" />

                <div className={isLeft ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'}>
                  <span className="eyebrow">{entry.year}</span>
                  <h3 className="font-display text-lg font-semibold mt-1 text-ink-50">
                    {entry.title}
                  </h3>
                  <p className="body-muted text-sm mt-1 max-w-sm md:ml-auto">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
