import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

const TextLink = ({ className, children, ...rest }: LinkProps) => (
  <Link
      {...rest}
      className={classNames(
        'inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] border-b border-[var(--accent-dim)] hover:text-[var(--accent-green)] hover:border-[rgba(140,255,46,0.24)]',
        className
      )}
  >
    {children}
  </Link>
);

export default TextLink;
