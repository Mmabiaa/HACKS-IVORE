import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site-data";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>Heavy equipment, drilling support and practical field services for demanding operations.</p>
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
            Phone: To be confirmed
            <br />
            Email: To be confirmed
            <br />
            Office: Ghana — details to be confirmed
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Hacks Ivore Drilling & Mining.</span>
        <span>Equipment • Drilling • Field Support</span>
      </div>
    </footer>
  );
}
