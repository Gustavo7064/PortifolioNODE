import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="section-shell py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink-600">
          © {year} {profile.name}. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full glass glass-hover text-ink-200 hover:text-white"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full glass glass-hover text-ink-200 hover:text-white"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full glass glass-hover text-ink-200 hover:text-white"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
