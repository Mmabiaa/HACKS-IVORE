import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/site-data";

export function HeroSection() {
  return (
    <section className="hero">
      <img
        src={images.heroImage}
        alt="Heavy mining equipment in operation"
        width="1920"
        height="1080"
      />
      <div className="shell hero-content">
        <p className="eyebrow">Equipment • Drilling • Field Support</p>
        <h1>Reliable equipment and field support for mining excellence.</h1>
        <p className="lead">
          HACKS IVOIRE DRILLING AND MINING EQUIPMENT RENTAL SERVICES provides heavy equipment rental, drilling support services, fleet management, equipment maintenance, and integrated mining logistics for the mining, exploration, quarrying, construction, and infrastructure industries throughout the Republic of Côte d'Ivoire and the wider West African region.
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
          <span>Fleet Management</span>
          <span>Field Maintenance</span>
        </div>
      </div>
    </section>
  );
}
