import { ArrowLink } from "@/components/common";
import { images } from "@/data/site-data";

export function CaseStudySection() {
  return (
    <section className="section">
      <div className="shell case-feature">
        <img
          loading="lazy"
          src={images.recoveryImage}
          alt="Heavy equipment recovery operation on a Ghanaian work site"
          width="1600"
          height="1000"
        />
        <div className="case-copy">
          <span className="tag">Representative case study</span>
          <p className="eyebrow">Field experience • Ghana</p>
          <h2>Equipment Recovery Support</h2>
          <p>
            A heavy machine became immobilized during active operations. Hacks Ivore coordinated
            recovery and towing support to assist the client's team in restoring site operations.
          </p>
          <ArrowLink to="/field-experience">View field experience</ArrowLink>
        </div>
      </div>
    </section>
  );
}
