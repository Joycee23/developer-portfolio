import { services } from "@/data/personal";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="section-title">Services</h2>
        <p className="text-body max-w-2xl mb-10">The areas I work in, from AI models to the interfaces and APIs that make them useful.</p>
        <dl className="service-list">
          {services.slice(0, 3).map((service) => (
            <div key={service.title} className="grid md:grid-cols-[1fr_1.5fr] gap-3 md:gap-10 py-7">
              <dt className="text-xl font-medium text-heading">{service.title}</dt>
              <dd className="text-body max-w-2xl leading-relaxed">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
