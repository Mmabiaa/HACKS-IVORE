import { ArrowLink } from "@/components/common";
import { SectionHeading } from "@/sections/shared";
import { equipment } from "@/data/site-data";

export function EquipmentSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Equipment"
          title="Equipment for the work ahead."
          intro="A practical catalogue covering earthmoving, material handling, drilling and support requirements. Availability is confirmed for each enquiry."
        />
        <div className="equipment-grid">
          {equipment.slice(0, 6).map(([name, app, img]) => (
            <article className="equipment-card" key={name}>
              <img
                loading="lazy"
                src={img}
                alt={`${name} in a field environment`}
                width="1600"
                height="1000"
              />
              <div>
                <span className="tag">Category</span>
                <h3>{name}</h3>
                <p>{app}</p>
                <div className="availability">
                  <strong>Enquire for availability</strong>
                  <ArrowLink to="/equipment">View</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
