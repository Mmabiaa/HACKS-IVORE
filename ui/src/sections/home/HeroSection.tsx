import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src={'https://i.pinimg.com/1200x/3d/ba/13/3dba13e9a5e7b39e40b61982a86c4e1a.jpg'}
        alt="Heavy mining equipment in operation"
        loading="eager"
        fetchPriority="high"
        style={{ imageRendering: 'auto' }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="shell hero-content">
        <p className="text-white eyebrow">Equipment • Drilling • Field Support</p>
        <h1>Reliable equipment and field support for mining excellence.</h1>
        <p className="lead">
          Heavy equipment rental, drilling support, and integrated mining logistics throughout Côte d'Ivoire and West Africa.
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