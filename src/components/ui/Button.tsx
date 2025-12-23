import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type Props = NativeButtonProps & {
  variant?: 'solid' | 'ghost';
  to?: string;
  href?: string;
};

const Button = ({ variant = 'solid', className, children, to, href, ...rest }: Props) => {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-subtle';
  const styles =
    variant === 'solid'
      ? 'bg-neon text-black hover:brightness-90 shadow-[0_6px_18px_rgba(0,255,65,0.08)]'
      : 'text-neon border border-[rgba(0,255,65,0.12)] hover:bg-[rgba(0,255,65,0.04)]';

  if (to) {
    return (
      <Link to={to} className={classNames(base, styles, className)}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames(base, styles, className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames(base, styles, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
