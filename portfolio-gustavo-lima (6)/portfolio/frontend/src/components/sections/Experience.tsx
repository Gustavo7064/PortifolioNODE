import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experiencia" className="section-shell py-24 md:py-32">
      <SectionHeading
        eyebrow={experience.eyebrow}
        title={experience.role}
        description={experience.description}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {experience.skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 h-full">
              <span className="font-mono text-xs text-cyan-400">0{i + 1}</span>
              <h3 className="font-display text-lg font-semibold text-ink-50 mt-2 mb-2">
                {skill.title}
              </h3>
              <p className="body-muted text-sm">{skill.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
