import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import GradientButton from '@/components/ui/GradientButton';
import Terminal from '@/components/ui/Terminal';
import { profile } from '@/data/content';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [showCvMessage, setShowCvMessage] = useState(false);

  useEffect(() => {
    if (!showCvMessage) return;

    const timer = window.setTimeout(() => setShowCvMessage(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showCvMessage]);

  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="section-shell grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-accent-gradient p-[2px]">
                <div className="w-full h-full rounded-full bg-base-950 flex items-center justify-center text-lg font-display font-semibold">
                  GL
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-base-950" />
            </div>
            <span className="text-sm text-ink-400">Disponível para novas oportunidades</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-xl sm:text-2xl font-display text-ink-200">
            <span className="gradient-text">{profile.role}</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 body-muted text-base sm:text-lg max-w-md">
            {profile.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <GradientButton as="a" href="#projetos" icon={<FiArrowRight size={16} />}>
              Ver Projetos
            </GradientButton>
            <GradientButton as="a" href={profile.github} target="_blank" rel="noreferrer" variant="secondary" icon={<FiGithub size={16} />}>
              GitHub
            </GradientButton>
            <GradientButton as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary" icon={<FiLinkedin size={16} />}>
              LinkedIn
            </GradientButton>
            <div className="flex flex-col items-start gap-2">
              <GradientButton
                as="a"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                icon={<FiDownload size={16} />}
                onClick={() => setShowCvMessage(true)}
              >
                Baixar CV
              </GradientButton>
              {showCvMessage && (
                <p className="text-sm text-cyan-300">Espero nos vermos em breve!</p>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
