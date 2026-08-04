import { motion } from 'framer-motion';
import { FiStar, FiGithub } from 'react-icons/fi';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import GradientButton from '@/components/ui/GradientButton';
import { useGithub } from '@/hooks/useGithub';
import { profile } from '@/data/content';

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-5 animate-pulse">
      <div className="h-4 w-1/2 bg-white/[0.08] rounded mb-3" />
      <div className="h-3 w-full bg-white/[0.05] rounded mb-2" />
      <div className="h-3 w-2/3 bg-white/[0.05] rounded" />
    </div>
  );
}

export default function Github() {
  const { repos, profile: ghProfile, loading, error } = useGithub();

  return (
    <section id="github" className="section-shell py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Direto do repositório"
          description="Repositórios selecionados manualmente para aparecerem nesta seção."
        />
        <GradientButton
          as="a"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          icon={<FiGithub size={16} />}
        >
          Ver perfil completo
        </GradientButton>
      </div>

      {ghProfile && (
        <div className="flex gap-8 mb-10 -mt-6 text-sm text-ink-400">
          <span>
            <strong className="text-ink-50">{ghProfile.public_repos}</strong> repositórios públicos
          </span>
          <span>
            <strong className="text-ink-50">{ghProfile.followers}</strong> seguidores
          </span>
        </div>
      )}

      {error && (
        <p className="text-sm text-ink-400 glass rounded-xl px-4 py-3 mb-6">{error}</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

        {!loading &&
          repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard className="p-5 h-full">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm text-ink-50 truncate">{repo.name}</p>
                  <span className="flex items-center gap-1 text-xs text-amber-400 shrink-0 ml-2">
                    <FiStar size={12} /> {repo.stargazers_count}
                  </span>
                </div>
                <p className="text-xs text-ink-400 line-clamp-2 min-h-[32px]">
                  {repo.description ?? 'Sem descrição disponível.'}
                </p>
                {repo.language && (
                  <span className="inline-block mt-3 text-[11px] font-mono text-cyan-300">
                    {repo.language}
                  </span>
                )}
              </GlassCard>
            </motion.a>
          ))}
      </div>
    </section>
  );
}
