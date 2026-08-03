import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg mt-3">{title}</h2>
      {description && <p className="body-muted mt-4 max-w-xl">{description}</p>}
    </motion.div>
  );
}
