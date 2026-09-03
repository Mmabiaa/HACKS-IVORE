import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Heavy Equipment & Field Services Ghana | Hacks Ivore" },
      {
        name: "description",
        content:
          "Equipment supply, drilling support, recovery, towing, fleet maintenance and site support for demanding operations.",
      },
      { property: "og:title", content: "Hacks Ivore Services" },
      { property: "og:description", content: "Field services built for demanding operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});
