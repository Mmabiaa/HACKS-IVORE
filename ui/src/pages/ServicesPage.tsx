import { ArrowLink } from "@/components/common";
import { CtaBand, PageHero } from "@/sections/shared";
import { images, services } from "@/data/site-data";
import { serviceDetails } from "@/data/services-data";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive mining support services."
        intro="Equipment rental, drilling support, fleet management, and field maintenance."
        image={images.drillingImage}
      />
      <section className="section">
        <div className="shell">
          {services.map((s, i) => (
            <article className="service-detail" key={s.title}>
              <img
                loading="lazy"
                src={s.image}
                alt={`${s.title} operation`}
                width="1600"
                height="1000"
              />
              <div>
                <p className="eyebrow">Service {s.number}</p>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <h3>Typical applications</h3>
                <p>{serviceDetails[i]?.[0]}</p>
                <h3>Supporting equipment</h3>
                <p>{serviceDetails[i]?.[1]}</p>
                <h3>Field considerations</h3>
                <p>{serviceDetails[i]?.[2]}</p>
                <ArrowLink to="/request-quote">Discuss your requirement</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
