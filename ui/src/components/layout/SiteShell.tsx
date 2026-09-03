import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/common";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {pathname !== "/request-quote" && (
        <Button asChild variant="industrial" size="lg" className="mobile-quote">
          <Link to="/request-quote">Request a quote</Link>
        </Button>
      )}
    </>
  );
}
