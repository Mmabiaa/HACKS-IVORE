import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site-data";
import { Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, to]) => (
            <Link key={to} to={to} activeProps={{ className: "active" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="industrial" size="lg" className="desktop-cta">
          <Link to="/request-quote">
            Request a quote <ArrowRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="mobile-panel">
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, to]) => (
              <Link key={to} to={to}>
                {label}
                <ArrowRight />
              </Link>
            ))}
            <Button asChild variant="industrial" size="lg">
              <Link to="/request-quote">Request a quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
