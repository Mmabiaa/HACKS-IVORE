import { images } from "@/data/site-data";

export function FieldSupportSection() {
  return (
    <section className="section">
      <div className="shell split">
        <img
          loading="lazy"
          src={images.maintenanceImage}
          alt="Field technicians maintaining heavy equipment"
          width="1600"
          height="1100"
        />
        <div className="copy">
          <p className="eyebrow">Practical support in the field</p>
          <h2>Built around the realities of the field.</h2>
          <p>
            Active projects cannot always afford equipment shortages, breakdowns or unnecessary
            downtime. HACKS IVOIRE works as a practical field-support partner—combining equipment
            access with the coordination needed to keep demanding work moving.
          </p>
          <ul className="line-list">
            <li>Support shaped around site requirements</li>
            <li>Equipment access and field coordination</li>
            <li>Recovery and maintenance when it matters</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
