import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  id?: string;
}

const Section = ({ as: Component = 'section', className, children, id }: Props) => (
  <Component id={id} className={classNames('py-16 sm:py-20 lg:py-24', className)}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
  </Component>
);

export default Section;
