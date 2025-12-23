import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

const TextLink = ({ className, children, ...rest }: LinkProps) => (
  <Link
    {...rest}
    className={classNames(
      'inline-flex items-center gap-2 text-sm font-semibold text-neon-dim border-b border-[rgba(0,255,65,0.06)] hover:text-neon hover:border-[rgba(0,255,65,0.12)]',
      className
    )}
  >
    {children}
  </Link>
);

export default TextLink;
