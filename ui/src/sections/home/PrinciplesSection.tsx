import { SectionHeading } from "@/sections/shared";

const principles = [
  ["01", "Equipment Availability", "Access to equipment required for demanding operations."],
  ["02", "Field Readiness", "Practical support designed for real working environments."],
  ["03", "Responsive Recovery", "Support when equipment becomes stuck, immobilized or unavailable."],
  ["04", "Preventive Maintenance", "Maintenance support designed to reduce avoidable downtime."],
];

export function PrinciplesSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Hacks Ivore"
          title="More than equipment. Operational support."
          intro="Equipment is one part of keeping a project moving. We connect access with practical field support, recovery, maintenance and operational coordination."
        />
        <div className="principles">
          {principles.map((x) => (
            <div className="principle" key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
