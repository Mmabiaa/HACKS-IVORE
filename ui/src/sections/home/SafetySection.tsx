import { ArrowLink } from "@/components/common";

export function SafetySection() {
  return (
    <section className="section safety-band">
      <div className="shell">
        <div>
          <p className="eyebrow">Safety & standards</p>
          <h2>Safety is part of the operation.</h2>
        </div>
        <div>
          <p>
            Our approach centers on equipment inspection, competent operation, PPE, site procedures,
            risk awareness and preventive maintenance. Safety is treated as part of planning and
            delivery—not a separate exercise.
          </p>
          <ArrowLink to="/safety">Our safety approach</ArrowLink>
        </div>
      </div>
    </section>
  );
}
