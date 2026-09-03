import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/site-data";

export function HeroSection() {
  return (
    <section className="hero">
      <img
        src={images.heroImage}
        alt="Excavator working in an open-pit quarry"
        width="1920"
        height="1080"
      />
      <div className="shell hero-content">
        <p className="eyebrow">Equipment • Drilling • Field Support</p>
        <h1>Equipment and field support that keeps operations moving.</h1>
        <p className="lead">
          Hacks Ivore provides heavy equipment, drilling support, recovery, towing and field
          maintenance services for demanding mining, construction and earthmoving operations.
        </p>
        <div className="hero-actions">
          <Button asChild variant="industrial" size="lg">
            <Link to="/request-quote">
              Request a quote <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="industrialOutline" size="lg">
            <Link to="/services">Explore our services</Link>
          </Button>
        </div>
        <div className="hero-meta">
          <span>Heavy Equipment</span>
          <span>Drilling Support</span>
          <span>Recovery</span>
          <span>Maintenance</span>
        </div>
      </div>
    </section>
  );
}
