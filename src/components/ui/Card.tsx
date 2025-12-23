import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => (
  <div
    className={classNames(
      'border border-slate/30 bg-white shadow-soft rounded-subtle p-6 transition-transform duration-200 hover:-translate-y-[4px]',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
