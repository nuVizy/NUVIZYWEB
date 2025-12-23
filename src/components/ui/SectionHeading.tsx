import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface Props {
  kicker: string;
  title: string;
  description?: ReactNode;
  align?: 'start' | 'center';
  eyebrowColor?: 'default' | 'accent';
}

const SectionHeading = ({ kicker, title, description, align = 'start', eyebrowColor = 'default' }: Props) => {
  return (
    <div className={classNames('space-y-2', align === 'center' ? 'text-center mx-auto' : '')}>
      <p
        className={classNames(
          'text-[12px] tracking-[0.24em] uppercase font-semibold',
          eyebrowColor === 'accent' ? 'text-accent' : 'text-slate'
        )}
      >
        {kicker}
      </p>
      <h2 className="font-serif">{title}</h2>
      {description && <div className="text-slate text-base leading-relaxed max-w-[65ch]">{description}</div>}
    </div>
  );
};

export default SectionHeading;
