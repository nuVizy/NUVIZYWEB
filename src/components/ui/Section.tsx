import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  id?: string;
}

const Section = ({ as: Component = 'section', className, children, id }: Props) => (
  <Component id={id} className={classNames('py-12 sm:py-16', className)}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
  </Component>
);

export default Section;
