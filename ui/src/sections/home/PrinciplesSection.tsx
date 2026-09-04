import { SectionHeading } from "@/sections/shared";

const principles = [
  ["01", "Experienced Leadership", "Strong leadership team with deep industry experience guiding every operation."],
  ["02", "Well-Maintained Fleet", "Modern, well-maintained equipment fleet ensuring maximum reliability and uptime."],
  ["03", "Skilled Personnel", "Competent operators and technicians trained to the highest safety and operational standards."],
  ["04", "Safety Culture", "Strong Health, Safety & Environment (HSE) culture embedded across all operations."],
  ["05", "Rapid Response", "Quick field support services and breakdown assistance to minimize downtime."],
  ["06", "Preventive Care", "Comprehensive preventive maintenance programmes for equipment reliability."],
];

export function PrinciplesSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Choose HACKS IVOIRE"
          title="More than equipment. Operational excellence."
          intro="Equipment is one part of keeping a project moving. We combine quality equipment with professional support, strong safety culture, and commitment to operational excellence."
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
