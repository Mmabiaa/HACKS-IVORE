import { useState } from "react";
import { ArrowLink } from "@/components/common";
import { CtaBand, PageHero } from "@/sections/shared";
import { equipmentCategories, equipmentCatalogue, images } from "@/data/site-data";

export function EquipmentPage() {
  const [active, setActive] = useState<string>("All Equipment");
  const shown =
    active === "All Equipment"
      ? equipmentCatalogue
      : equipmentCatalogue.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Equipment for the work ahead."
        intro="Complete fleet of heavy equipment for mining, construction, and infrastructure projects."
        image={images.heroImage}
      />

      <section className="section">
        <div className="shell">
          <div className="filter-bar" role="tablist" aria-label="Equipment categories">
            {equipmentCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                className={active === category ? "filter-chip is-active" : "filter-chip"}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="form-note">
            Showing {shown.length} {shown.length === 1 ? "entry" : "entries"}. Model designations,
            capacities and quantities are intentionally not listed until confirmed.
          </p>

          <div className="equipment-grid">
            {shown.map((item) => (
              <article className="equipment-card" key={item.name}>
                <img
                  loading="lazy"
                  src={item.image}
                  alt={`${item.name} operating in a field environment`}
                  width="1600"
                  height="1000"
                />
                <div>
                  <span className="tag">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.application}</p>
                  <dl className="spec-list">
                    <div>
                      <dt>Specifications</dt>
                      <dd>To be confirmed</dd>
                    </div>
                    <div>
                      <dt>Availability</dt>
                      <dd>Confirmed per enquiry</dd>
                    </div>
                    <div>
                      <dt>Location</dt>
                      <dd>Ghana — to be confirmed</dd>
                    </div>
                  </dl>
                  <ArrowLink to="/request-quote">Request equipment</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
