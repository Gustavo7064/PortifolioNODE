import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CODE_LINES = [
  { text: 'import { Router } from "express";', color: 'text-ink-400' },
  { text: 'import { db } from "./database";', color: 'text-ink-400' },
  { text: '', color: '' },
  { text: 'const router = Router();', color: 'text-ink-200' },
  { text: '', color: '' },
  { text: 'router.get("/status", async (_, res) => {', color: 'text-ink-200' },
  { text: '  const uptime = await db.ping();', color: 'text-cyan-300' },
  { text: '  return res.json({ ok: true, uptime });', color: 'text-indigo-400' },
  { text: '});', color: 'text-ink-200' },
  { text: '', color: '' },
  { text: '// pronto para produção ✓', color: 'text-ink-600' },
];

/**
 * Terminal window that "types" a small backend snippet on mount.
 * This is the hero's signature element — it stands in for the
 * developer's actual day-to-day work instead of a generic hero graphic.
 */
export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 220);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="absolute -inset-6 bg-accent-gradient opacity-20 blur-3xl rounded-full animate-float" />

      <div className="relative glass rounded-2xl shadow-glow overflow-hidden font-mono text-[13px] leading-relaxed">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-xs text-ink-600">api/routes/status.ts</span>
        </div>

        <div className="p-5 min-h-[260px]">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`${line.color || 'text-transparent'} whitespace-pre`}>
              {line.text || '\u00A0'}
            </div>
          ))}
          {visibleLines < CODE_LINES.length && (
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-blink align-middle" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
