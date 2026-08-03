import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiTarget, FiCode, FiCheckCircle, FiBookOpen, FiRefreshCw } from 'react-icons/fi';
import GlassCard from '@/components/ui/GlassCard';
import { projects } from '@/data/content';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const videoLinks = [project.youtubeUrl, ...(project.videoUrls ?? [])].filter(
    (url): url is string => Boolean(url) && !url.includes('SEU_VIDEO_AQUI')
  );

  const videoEmbeds = videoLinks
    .map((url) => ({ url, embedUrl: getYouTubeEmbedUrl(url) }))
    .filter((video): video is { url: string; embedUrl: string } => Boolean(video.embedUrl));

  const hasVideos = videoEmbeds.length > 0;

  return (
    <article className="section-shell pt-32 pb-24 md:pt-40 md:pb-32">
      <Link
        to="/#projetos"
        className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors mb-8"
      >
        <FiArrowLeft size={16} /> Voltar aos projetos
      </Link>

      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="heading-lg max-w-3xl">{project.title}</h1>
        <p className="body-muted text-lg mt-4 max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.repos && project.repos.length > 0 ? (
          <div className="flex flex-wrap gap-3 mt-8">
            {project.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium glass glass-hover text-ink-50"
              >
                <FiGithub size={16} /> {repo.label}
              </a>
            ))}
          </div>
        ) : (
          project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full text-sm font-medium glass glass-hover text-ink-50"
            >
              <FiGithub size={16} /> Ver código no GitHub
            </a>
          )
        )}
      </motion.div>

      {/* Vídeos */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="mt-12"
      >
        {hasVideos ? (
          <div className="space-y-6">
            {videoEmbeds.map((video, index) => (
              <div key={`${video.url}-${index}`} className="relative w-full aspect-video rounded-2xl overflow-hidden glass">
                <iframe
                  src={video.embedUrl}
                  title={`Vídeo de demonstração ${index + 1} — ${project.title}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full aspect-video rounded-2xl glass flex items-center justify-center text-center px-6">
            <p className="text-sm text-ink-600 font-mono">
              Vídeo de demonstração em breve — adicione o link do YouTube em{' '}
              <code className="text-cyan-400">youtubeUrl</code> ou em <code className="text-cyan-400">videoUrls</code> no{' '}
              <code className="text-cyan-400">content.ts</code>.
            </p>
          </div>
        )}
      </motion.div>

      {/* Objetivo + Como foi feito */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <FiTarget size={18} />
              <h2 className="font-display text-lg font-semibold text-ink-50">Objetivo</h2>
            </div>
            <p className="body-muted text-sm">{project.objective}</p>
          </GlassCard>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <FiCode size={18} />
              <h2 className="font-display text-lg font-semibold text-ink-50">Como foi construído</h2>
            </div>
            <p className="body-muted text-sm">{project.howItWasBuilt}</p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Funcionalidades */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="mt-6"
      >
        <GlassCard className="p-6">
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <FiCheckCircle size={18} />
            <h2 className="font-display text-lg font-semibold text-ink-50">Principais funcionalidades</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-400">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gradient shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>

      {/* O que aprendi + mudança de mentalidade */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <FiBookOpen size={18} />
              <h2 className="font-display text-lg font-semibold text-ink-50">O que aprendi</h2>
            </div>
            <p className="body-muted text-sm">{project.whatILearned}</p>
          </GlassCard>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <GlassCard className="p-6 h-full">
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <FiRefreshCw size={18} />
              <h2 className="font-display text-lg font-semibold text-ink-50">Como mudou meu jeito de pensar</h2>
            </div>
            <p className="body-muted text-sm">{project.mindsetShift}</p>
          </GlassCard>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-accent-gradient text-white shadow-glow hover:shadow-glow-cyan hover:scale-[1.03] transition-all duration-300"
        >
          <FiArrowLeft size={16} /> Ver outros projetos
        </Link>
      </div>
    </article>
  );
}
