import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site-data";
import { contactInfo } from "@/data/contact-data";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>Heavy equipment rental, drilling support services, fleet management, and integrated mining logistics for mining, exploration, quarrying, construction, and infrastructure industries throughout Côte d'Ivoire and West Africa.</p>
          <Button asChild variant="industrial" size="lg">
            <Link to="/request-quote">
              Request a quote <ArrowRight />
            </Link>
          </Button>
        </div>
        <div>
          <h3>Company</h3>
          {navItems.slice(0, 4).map(([l, t]) => (
            <Link key={t} to={t}>
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h3>Information</h3>
          {navItems.slice(4).map(([l, t]) => (
            <Link key={t} to={t}>
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Phone: {contactInfo.phones[0]}
            <br />
            Email: {contactInfo.email}
            <br />
            Office: {contactInfo.office.location}
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 HACKS IVOIRE Drilling & Mining Equipment Rental Services.</span>
        <span>Equipment • Drilling • Field Support</span>
      </div>
    </footer>
  );
}
