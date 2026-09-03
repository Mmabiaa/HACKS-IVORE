import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss the work ahead."
        intro="Share the requirement, location and timing. We will review the operating context and respond with the next practical step."
        image={images.heroImage}
      />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact details</p>
            <div className="contact-block">
              <h3>Office location</h3>
              <p>Ghana — office details to be confirmed</p>
            </div>
            <div className="contact-block">
              <h3>Phone</h3>
              <p>Contact number to be confirmed</p>
            </div>
            <div className="contact-block">
              <h3>Email</h3>
              <p>Business email to be confirmed</p>
            </div>
            <div className="contact-block">
              <h3>Operating regions</h3>
              <p>Coverage confirmed per project requirement</p>
            </div>
            <div className="contact-block">
              <h3>Business hours</h3>
              <p>Hours to be confirmed</p>
            </div>
          </div>
          <div className="copy">
            <p className="eyebrow">Project and procurement enquiries</p>
            <h2>Give us the operating context.</h2>
            <p>
              For the fastest assessment, include the project location, required date, expected
              duration, equipment category and the nature of the work.
            </p>
            <div className="hero-actions">
              <Button asChild variant="industrial" size="lg">
                <Link to="/request-quote">
                  Request a quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/request-quote">Send an enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
