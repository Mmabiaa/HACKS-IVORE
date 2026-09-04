import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mining Equipment & Field Services Côte d'Ivoire | HACKS IVOIRE" },
      {
        name: "description",
        content:
          "Equipment rental, drilling support, fleet management, preventive maintenance and integrated logistics for mining and construction operations.",
      },
      { property: "og:title", content: "HACKS IVOIRE Services" },
      { property: "og:description", content: "Field services built for demanding operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});
