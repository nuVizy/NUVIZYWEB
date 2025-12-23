import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => (
  <div className={classNames('panel rounded-subtle p-6', className)}>{children}</div>
);

export default Card;
