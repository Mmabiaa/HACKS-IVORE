import { type ReactNode } from "react";
import { Header, Footer } from "@/components/common";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
