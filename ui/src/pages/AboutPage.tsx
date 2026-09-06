import { CtaBand, PageHero, SectionHeading } from "@/sections/shared";
import { images } from "@/data/site-data";
import { companyValues, vision, mission, objectives, whyChooseUs, ceoMessage, operationsManagerMessage } from "@/data/about-data";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built around demanding operations."
        intro="Indigenous mining support company providing reliable equipment and professional field services throughout Côte d'Ivoire and West Africa."
        image={images.maintenanceImage}
      />
      
      <section className="section">
        <div className="shell content-grid">
          <p className="eyebrow">Company Overview</p>
          <div>
            <article>
              <h2>About Us</h2>
              <p>
                HACKS IVOIRE DRILLING AND MINING EQUIPMENT RENTAL SERVICES is an indigenous mining support company specialising in heavy equipment rental, drilling support services, fleet management, equipment maintenance, and integrated mining logistics for the mining, exploration, quarrying, construction, and infrastructure industries throughout the Republic of Côte d'Ivoire and the wider West African region.
              </p>
              <p>
                We are committed to providing reliable equipment, highly skilled personnel, and innovative operational solutions that enhance productivity while maintaining the highest standards of safety, quality, and environmental responsibility. Our services are designed to support clients through every stage of their operations, from exploration and mobilisation to project completion.
              </p>
              <p>
                At HACKS IVOIRE, we believe that operational excellence is achieved through competent people, dependable equipment, effective planning, preventive maintenance, and continuous improvement. Guided by our company motto—"Safe Production with Zero Harm to People, Property, and the Environment"—we strive to deliver professional, efficient, and sustainable solutions that exceed client expectations.
              </p>
              <p>
                Our objective is to become the preferred mining equipment rental and drilling support partner across West Africa by building lasting relationships founded on integrity, trust, professionalism, and exceptional service delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">

          <div className="content-grid">
            <div></div>
            <div>
              <article>
                <h2>Our Vision</h2>
                <p>{vision}</p>
              </article>
              <article>
                <h2>Our Mission</h2>
                <p>{mission}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Core Values"
            title="Our Core Values"
            intro="The principles that guide everything we do."
          />
          <div className="placeholder-grid">
            {companyValues.map((value) => (
              <article className="placeholder-card" key={value.title}>
                <span>Core Value</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Objectives"
            title="Strategic Objectives"
            intro="Clear goals driving our commitment to excellence."
          />
          <div className="content-grid">
            <div></div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {objectives.map((objective, index) => (
                <li key={index} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Leadership"
            title="Message from the Chief Executive Officer"
            intro={ceoMessage.name + " — " + ceoMessage.title}
          />
          <div className="content-grid">
            <div></div>
            <div style={{ whiteSpace: 'pre-line' }}>
              <p>{ceoMessage.message}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading
            eyebrow="Operations"
            title="Message from the Operations Manager"
            intro={operationsManagerMessage.name + " — " + operationsManagerMessage.title}
          />
          <div className="content-grid">
            <div></div>
            <div style={{ whiteSpace: 'pre-line' }}>
              <p>{operationsManagerMessage.message}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose HACKS IVOIRE"
            intro="Our commitment to operational excellence sets us apart."
          />
          <div className="value-grid">
            {whyChooseUs.map((reason) => (
              <div key={reason}>{reason}</div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
