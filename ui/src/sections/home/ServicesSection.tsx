import { ArrowLink } from "@/components/common";
import { SectionHeading } from "@/sections/shared";
import { services } from "@/data/site-data";

export function ServicesSection() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <SectionHeading
          eyebrow="Core services"
          title="Comprehensive mining support."
          intro="Equipment, drilling, fleet management, and field services for demanding operations."
        />
        <div className="service-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <img
                loading="lazy"
                src={s.image}
                alt={`${s.title} field operation`}
                width="1600"
                height="1000"
              />
              <div className="service-card-body">
                <span className="number">{s.number}</span>
                <h3>{s.title}</h3>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', margin: '0.5rem 0', color: 'var(--muted-foreground)' }}>
                  {s.header}
                </h4>
                <p>{s.description}</p>
                <ArrowLink to="/services">Explore service</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
