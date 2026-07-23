import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { techStack } from '@/data/content';

// Short badge label + accent color per technology.
// Self-contained (no external icon package) so it can never break
// because an icon library renamed or removed an export upstream.
const BADGE: Record<string, { label: string; from: string; to: string }> = {
  'C#': { label: 'C#', from: '#a855f7', to: '#6366f1' },
  'ASP.NET Core MVC': { label: 'ASP', from: '#8b5cf6', to: '#6366f1' },
  'Razor Views': { label: 'Rz', from: '#8b5cf6', to: '#7c3aed' },
  'Node.js': { label: 'JS', from: '#22c55e', to: '#16a34a' },
  TypeScript: { label: 'TS', from: '#3b82f6', to: '#2563eb' },
  JavaScript: { label: 'JS', from: '#facc15', to: '#eab308' },
  Express: { label: 'Ex', from: '#64748b', to: '#334155' },
  'REST APIs': { label: 'API', from: '#22d3ee', to: '#0ea5e9' },
  SQL: { label: 'SQL', from: '#38bdf8', to: '#0284c7' },
  PostgreSQL: { label: 'PG', from: '#38bdf8', to: '#3b82f6' },
  MySQL: { label: 'My', from: '#f97316', to: '#ea580c' },
  MongoDB: { label: 'Mo', from: '#22c55e', to: '#15803d' },
  Docker: { label: 'Dk', from: '#38bdf8', to: '#2563eb' },
  Git: { label: 'Git', from: '#f97316', to: '#dc2626' },
  GitHub: { label: 'Hub', from: '#a1a1aa', to: '#52525b' },
  React: { label: 'Re', from: '#22d3ee', to: '#0891b2' },
  HTML: { label: '</>', from: '#f97316', to: '#ea580c' },
  CSS: { label: 'CSS', from: '#3b82f6', to: '#6366f1' },
  Bootstrap: { label: 'BS', from: '#a855f7', to: '#7c3aed' },
  Flutter: { label: 'Fl', from: '#38bdf8', to: '#2563eb' },
  Dart: { label: 'Dt', from: '#0ea5e9', to: '#0369a1' },
  'Entity Framework': { label: 'EF', from: '#8b5cf6', to: '#6366f1' },
  JWT: { label: 'JWT', from: '#ec4899', to: '#db2777' },
  Microsserviços: { label: 'μS', from: '#22d3ee', to: '#6366f1' },
  'Cloud Computing': { label: '☁', from: '#22d3ee', to: '#3b82f6' },
};

const LEVEL_WIDTH: Record<string, string> = {
  Avançado: '90%',
  Intermediário: '65%',
  Básico: '35%',
};

export default function Stack() {
  return (
    <section id="stack" className="section-shell py-24 md:py-32">
      <SectionHeading
        eyebrow="Stack"
        title="Ferramentas que uso de verdade"
        description="Da modelagem do banco à última rota da API — o que sustenta os projetos abaixo."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((tech, i) => {
          const badge = BADGE[tech.name];
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-5 h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono font-semibold text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: badge
                        ? `linear-gradient(135deg, ${badge.from}, ${badge.to})`
                        : undefined,
                    }}
                  >
                    {badge?.label ?? tech.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-ink-50">{tech.name}</p>
                    <p className="text-xs text-ink-600">{tech.level}</p>
                  </div>
                </div>
                <p className="text-xs text-ink-400 leading-relaxed mb-3">{tech.description}</p>
                <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full bg-accent-gradient rounded-full"
                    style={{ width: LEVEL_WIDTH[tech.level] }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
