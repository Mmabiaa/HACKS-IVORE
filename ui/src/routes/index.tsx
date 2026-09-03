import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heavy Equipment & Field Support Ghana | Hacks Ivore" },
      {
        name: "description",
        content:
          "Heavy equipment, drilling support, recovery, towing and field maintenance for mining, construction and earthmoving operations in Ghana.",
      },
      { property: "og:title", content: "Hacks Ivore Drilling & Mining" },
      { property: "og:description", content: "Equipment and field support that keeps operations moving." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
