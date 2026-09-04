import { CtaBand, PageHero, SectionHeading } from "@/sections/shared";
import { images } from "@/data/site-data";
import { safetyPractices, documentationAreas, hseCommitment, safetyMotto } from "@/data/safety-data";

export function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Standards"
        title="Safety is part of the operation."
        intro="Safe work depends on preparation, competent people, maintained equipment and disciplined execution in the field."
        image={images.maintenanceImage}
      />

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Health, Safety & Environment"
            title="Our HSE Commitment"
            intro={safetyMotto}
          />
          <div className="content-grid">
            <div></div>
            <div style={{ whiteSpace: 'pre-line' }}>
              <p>{hseCommitment}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="placeholder-grid">
            {safetyPractices.map(([t, d]) => (
              <article className="placeholder-card" key={t}>
                <span>Operating practice</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Documentation"
            title="Standards information will be published when verified."
            intro="These areas are intentionally shown as placeholders. No certifications or regulatory approvals are claimed."
          />
          <div className="placeholder-grid">
            {documentationAreas.map((x) => (
              <div className="placeholder-card" key={x}>
                <span>Future documentation</span>
                <h3>{x}</h3>
                <p>Information to be provided and verified.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
