import { ArrowLink } from "@/components/common";
import { CtaBand, PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";

export function FieldExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Field Experience"
        title="Experience where the work happens."
        intro="Representative field scenarios show how equipment, planning and practical coordination come together. Verified project profiles will be added as they become available."
        image={images.recoveryImage}
      />
      <section className="section">
        <div className="shell case-feature">
          <img
            src={images.recoveryImage}
            loading="lazy"
            alt="Recovery team coordinating around immobilized heavy equipment"
            width="1600"
            height="1000"
          />
          <div className="case-copy">
            <span className="tag">Prototype placeholder • Not a client claim</span>
            <p className="eyebrow">Ghana</p>
            <h2>Equipment Recovery Support</h2>
            <p>
              A heavy machine became immobilized during active operations. Hacks Ivore coordinated
              recovery and towing support to assist the client's team in restoring site operations.
            </p>
            <ArrowLink to="/request-quote">Request recovery support</ArrowLink>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
