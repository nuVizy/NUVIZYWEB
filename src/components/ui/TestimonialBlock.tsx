interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialBlock = ({ testimonials }: Props) => (
  <div className="grid gap-6 md:grid-cols-3">
    {testimonials.map(item => (
      <div key={item.name} className="border border-slate/30 rounded-subtle p-6 bg-white">
        <p className="font-serif text-lg leading-relaxed mb-4">“{item.quote}”</p>
        <div className="text-sm font-semibold">{item.name}</div>
        <div className="text-xs uppercase tracking-wide text-slate">{item.role}</div>
      </div>
    ))}
  </div>
);

export default TestimonialBlock;
