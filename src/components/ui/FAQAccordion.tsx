import { useState } from 'react';
import { classNames } from '../../lib/classNames';

interface Item {
  question: string;
  answer: string;
}

interface Props {
  items: Item[];
}

const FAQAccordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate/30 border border-slate/30 rounded-subtle">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="w-full text-left px-4 py-3 flex items-center justify-between"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-slate">{open ? '–' : '+'}</span>
            </button>
            <div className={classNames('px-4 pb-4 text-sm text-slate transition-all duration-300', open ? 'block' : 'hidden')}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
