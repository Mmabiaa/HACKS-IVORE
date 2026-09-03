import { CtaBand, PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";
import { companyValues } from "@/data/about-data";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built around the realities of demanding operations."
        intro="Hacks Ivore is an emerging Ghanaian equipment and field-support company focused on the practical requirements of mining, construction, drilling and earthmoving work."
        image={images.maintenanceImage}
      />
      <section className="section">
        <div className="shell content-grid">
          <p className="eyebrow">Company profile</p>
          <div>
            <article>
              <h2>Who we are</h2>
              <p>
                We are building a field-oriented business around reliability, discipline and
                responsive support. Our focus is straightforward: understand the requirement,
                coordinate the right resources and support the work responsibly.
              </p>
            </article>
            <article>
              <h2>What we do</h2>
              <p>
                We support equipment supply, drill rig operations, mobilization, recovery, towing,
                fleet maintenance and day-to-day site requirements.
              </p>
            </article>
            <article>
              <h2>How we work</h2>
              <p>
                Every requirement begins with the operating context—location, terrain, timing,
                access, equipment need and site procedures. This allows support to be planned around
                the actual conditions.
              </p>
            </article>
            <article>
              <h2>Our people</h2>
              <p>
                Our work depends on practical coordination between operators, technicians,
                supervisors and client teams. Team and leadership profiles will be added as company
                information is confirmed.
              </p>
            </article>
          </div>
        </div>
        <div className="shell value-grid">
          {companyValues.map((v) => (
            <div key={v}>{v}</div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
