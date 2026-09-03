import { ArrowLink } from "@/components/common";
import { SectionHeading } from "@/sections/shared";
import { services } from "@/data/site-data";

export function ServicesSection() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <SectionHeading
          eyebrow="Core services"
          title="Field services built for demanding operations."
          intro="From earthmoving equipment to drilling, recovery and maintenance support, our services are structured around active operating environments."
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
