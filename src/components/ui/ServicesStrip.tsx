interface ServiceItem {
  title: string;
  detail: string;
}

interface Props {
  services: ServiceItem[];
}

const ServicesStrip = ({ services }: Props) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service, index) => (
      <div key={service.title} className="border border-slate/30 rounded-subtle p-4 bg-white">
        <div className="text-xs uppercase tracking-wide text-slate mb-2">Service {index + 1}</div>
        <h3 className="font-serif text-lg mb-2">{service.title}</h3>
        <p className="text-sm text-slate">{service.detail}</p>
      </div>
    ))}
  </div>
);

export default ServicesStrip;
