import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { projects } from '@/data/content';

export default function Projects() {
  return (
    <section id="projetos" className="section-shell py-24 md:py-32">
      <SectionHeading
        eyebrow="Projetos"
        title="Coisas que eu construí"
        description="Do primeiro CRUD ao trabalho de conclusão de curso — cada projeto marca uma etapa da minha evolução. Clique para ver como cada um foi construído."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="group h-full flex flex-col">
              <Link to={`/projeto/${project.id}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/20 to-transparent" />
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link to={`/projeto/${project.id}`}>
                  <h3 className="font-display text-xl font-semibold text-ink-50 mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="body-muted text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/[0.06]"
                    >
                      <FiGithub size={14} /> GitHub
                    </a>
                  )}
                  <Link
                    to={`/projeto/${project.id}`}
                    className="ml-auto flex items-center gap-1 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors px-3 py-1.5 rounded-full hover:bg-cyan-500/10"
                  >
                    Ver estudo de caso <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
