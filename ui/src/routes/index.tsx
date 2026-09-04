import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heavy Equipment & Field Support Côte d'Ivoire | HACKS IVOIRE" },
      {
        name: "description",
        content:
          "Heavy equipment rental, drilling support, fleet management and field maintenance for mining, exploration, quarrying, construction and infrastructure operations in Côte d'Ivoire and West Africa.",
      },
      { property: "og:title", content: "HACKS IVOIRE Drilling & Mining Equipment Rental Services" },
      { property: "og:description", content: "Equipment and field support that keeps operations moving." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
