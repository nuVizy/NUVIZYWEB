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
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-transform transition-colors duration-200 rounded-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 hover:-translate-y-[2px]';
  const styles =
    variant === 'solid'
      ? 'bg-charcoal text-white hover:bg-slate'
      : 'text-charcoal border border-charcoal hover:bg-charcoal hover:text-white';

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
