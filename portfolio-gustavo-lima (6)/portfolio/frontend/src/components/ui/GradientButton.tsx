import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent-gradient text-white shadow-glow hover:shadow-glow-cyan hover:scale-[1.03]',
  secondary: 'glass glass-hover text-ink-50',
  ghost: 'text-ink-200 hover:text-white hover:bg-white/[0.06]',
};

const shared =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95';

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' };
type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };

export default function GradientButton(props: AnchorProps | ButtonProps) {
  const { children, variant = 'primary', icon, className = '', ...rest } = props;
  const classes = `${shared} ${variantClasses[variant]} ${className}`;

  if (props.as === 'button') {
    const { as, ...buttonRest } = rest as ButtonProps;
    return (
      <button className={classes} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {icon}
        {children}
      </button>
    );
  }

  const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a className={classes} {...anchorRest}>
      {icon}
      {children}
    </a>
  );
}
