interface Step {
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: Props) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <div key={step.title} className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-semibold">
          {index + 1}
        </div>
        <div className="border-b border-slate/20 pb-4 flex-1">
          <h3 className="font-serif text-xl mb-1">{step.title}</h3>
          <p className="text-sm text-slate">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProcessTimeline;
