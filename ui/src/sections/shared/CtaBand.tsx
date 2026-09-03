import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="shell">
        <p className="eyebrow">Plan the next requirement</p>
        <h2>Tell us what the operation needs.</h2>
        <p>
          Share the project location, timing and equipment or field-support requirement. Our team
          will review the details and respond.
        </p>
        <Button asChild variant="industrial" size="lg">
          <Link to="/request-quote">
            Request a quote <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
