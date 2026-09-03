import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

export function ArrowLink({
  to,
  children,
}: {
  to: "/services" | "/equipment" | "/field-experience" | "/safety" | "/contact" | "/request-quote";
  children: ReactNode;
}) {
  return (
    <Link to={to} className="arrow-link">
      {children}
      <ArrowRight />
    </Link>
  );
}
