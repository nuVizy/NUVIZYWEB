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
    {children}
  </Component>
);

export default Section;
