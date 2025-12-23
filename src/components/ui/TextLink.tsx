import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

const TextLink = ({ className, children, ...rest }: LinkProps) => (
  <Link
    {...rest}
    className={classNames(
      'inline-flex items-center gap-2 text-sm font-semibold text-charcoal border-b border-charcoal/50 hover:border-charcoal',
      className
    )}
  >
    {children}
  </Link>
);

export default TextLink;
