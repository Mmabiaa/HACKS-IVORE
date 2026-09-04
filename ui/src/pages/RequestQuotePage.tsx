import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";
import { contactInfo } from "@/data/contact-data";
import { requirements, equipmentOptions } from "@/data/quote-data";

export function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need."
        intro="Provide your project details and we'll respond with a tailored solution."
        image={images.drillingImage}
      />

      <section className="section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Before you submit</p>
            <div className="contact-block">
              <h3>What helps us respond faster</h3>
              <p>
                Project location, access conditions, required date, expected duration and the nature
                of the work.
              </p>
            </div>
            <div className="contact-block">
              <h3>Procurement documentation</h3>
              <p>Supporting documents can be shared after initial contact.</p>
            </div>
            <div className="contact-block">
              <h3>Urgent recovery or breakdown</h3>
              <p>State it in the requirement notes so the request is prioritised for review.</p>
            </div>
            <div className="contact-block">
              <h3>Direct contact</h3>
              <p>
                Phone: {contactInfo.phones[0]}
                <br />
                Email: {contactInfo.email}
              </p>
            </div>
          </div>

          <div className="form-panel">
            {submitted && (
              <div className="success-message" role="status">
                <strong>Request recorded.</strong>
                <p>
                  This prototype confirms submission locally. Delivery to a company inbox can be
                  connected when required.
                </p>
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                (event.target as HTMLFormElement).reset();
              }}
              noValidate={false}
            >
              <fieldset className="form-section">
                <legend>Contact information</legend>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="fullName">Full name</label>
                    <input id="fullName" name="fullName" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" autoComplete="organization" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-section">
                <legend>Project information</legend>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="location">Project location</label>
                    <input id="location" name="location" required />
                  </div>
                  <div className="field">
                    <label htmlFor="projectType">Project type</label>
                    <select id="projectType" name="projectType" defaultValue="">
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option>Mining</option>
                      <option>Quarrying</option>
                      <option>Construction</option>
                      <option>Drilling</option>
                      <option>Earthmoving</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="requiredDate">Required date</label>
                    <input id="requiredDate" name="requiredDate" type="date" />
                  </div>
                  <div className="field">
                    <label htmlFor="duration">Expected duration</label>
                    <input id="duration" name="duration" placeholder="e.g. 6 weeks" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-section">
                <legend>Requirement</legend>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="requirement">Support required</label>
                    <select id="requirement" name="requirement" defaultValue="" required>
                      <option value="" disabled>
                        Select requirement
                      </option>
                      {requirements.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="equipmentType">Equipment selection</label>
                    <select id="equipmentType" name="equipmentType" defaultValue="">
                      <option value="" disabled>
                        Select equipment
                      </option>
                      {equipmentOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="notes">Additional requirements</label>
                    <textarea
                      id="notes"
                      name="notes"
                      placeholder="Scope of work, site access, ground conditions, operating hours, operator requirements, mobilization notes."
                    />
                  </div>
                </div>
              </fieldset>

              <p className="form-note">
                Submitted details are used only to assess and respond to the requirement.
              </p>

              <Button type="submit" variant="industrial" size="lg">
                Submit request <ArrowRight />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
