import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/content';
import type { StatItem } from '@/types';

function StatCard({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const value = useCountUp({ end: stat.value, startWhen: inView });

  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl font-semibold gradient-text tabular-nums">
        {value}
        {stat.suffix ?? ''}
      </p>
      <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-shell py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-2xl px-6 py-10 md:py-12 grid grid-cols-2 md:grid-cols-5 gap-8"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} inView={inView} />
        ))}
      </motion.div>
    </section>
  );
}
