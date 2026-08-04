import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { profile } from '@/data/content';

const NAV_LINKS = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Experiência', href: '/#experiencia' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Minha Jornada', href: '/#jornada' },
  { label: 'GitHub', href: '/#github' },
  { label: 'Contato', href: '/#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCvMessage, setShowCvMessage] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!showCvMessage) return;

    const timer = window.setTimeout(() => setShowCvMessage(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showCvMessage]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`section-shell flex items-center justify-between transition-all duration-300 mt-3 rounded-2xl ${
          scrolled ? 'glass py-3' : 'py-4'
        }`}
      >
        <a href="/" className="font-display font-semibold tracking-tight text-ink-50">
          Gustavo<span className="gradient-text">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-400 hover:text-ink-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex md:flex-col md:items-end">
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowCvMessage(true)}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium glass glass-hover"
          >
            Baixar CV
          </a>
          {showCvMessage && (
            <span className="mt-2 text-xs text-cyan-300">Espero nos vermos em breve!</span>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg glass"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden section-shell mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-ink-200 hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowCvMessage(true)}
                className="mt-2 px-3 py-2.5 rounded-lg text-sm font-medium bg-accent-gradient text-white text-center"
              >
                Baixar CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
