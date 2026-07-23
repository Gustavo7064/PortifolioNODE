import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck } from 'react-icons/fi';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientButton from '@/components/ui/GradientButton';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message ?? 'Não foi possível enviar sua mensagem.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg((err as Error).message);
    }
  }

  return (
    <section id="contato" className="section-shell py-24 md:py-32">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Aberto a oportunidades como Desenvolvedor Júnior. Manda uma mensagem, eu respondo pessoalmente."
        align="center"
      />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto glass rounded-2xl p-6 md:p-8 space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-ink-400 mb-2">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Como você se chama?"
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-50 placeholder:text-ink-600 focus:border-cyan-400/50 focus:bg-white/[0.06] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono text-ink-400 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-50 placeholder:text-ink-600 focus:border-cyan-400/50 focus:bg-white/[0.06] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-ink-400 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Conte um pouco sobre a oportunidade ou o motivo do contato."
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-50 placeholder:text-ink-600 focus:border-cyan-400/50 focus:bg-white/[0.06] outline-none transition-colors resize-none"
          />
        </div>

        <GradientButton
          as="button"
          type="submit"
          disabled={status === 'submitting'}
          icon={status === 'success' ? <FiCheck size={16} /> : <FiSend size={16} />}
          className="w-full justify-center disabled:opacity-60"
        >
          {status === 'submitting'
            ? 'Enviando...'
            : status === 'success'
              ? 'Mensagem enviada'
              : 'Enviar mensagem'}
        </GradientButton>

        {status === 'error' && (
          <p className="text-sm text-red-400 text-center">{errorMsg}</p>
        )}
        {status === 'success' && (
          <p className="text-sm text-cyan-300 text-center">
            Obrigado! Vou responder o quanto antes.
          </p>
        )}
      </motion.form>
    </section>
  );
}
