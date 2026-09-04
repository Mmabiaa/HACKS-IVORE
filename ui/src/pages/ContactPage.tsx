import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/sections/shared";
import { images } from "@/data/site-data";
import { contactInfo } from "@/data/contact-data";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your requirements."
        intro="Share your project details and we'll respond with the next step."
        image={images.heroImage}
      />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact details</p>
            <div className="contact-block">
              <h3>Company Name</h3>
              <p>{contactInfo.companyName}</p>
            </div>
            <div className="contact-block">
              <h3>Head Office</h3>
              <p>{contactInfo.office.address}</p>
            </div>
            <div className="contact-block">
              <h3>Telephone</h3>
              {contactInfo.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
            <div className="contact-block">
              <h3>Email</h3>
              <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
            <div className="contact-block">
              <h3>Website</h3>
              <p>{contactInfo.website}</p>
            </div>
            <div className="contact-block">
              <h3>Operating Regions</h3>
              <p>Republic of Côte d'Ivoire and West Africa</p>
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
