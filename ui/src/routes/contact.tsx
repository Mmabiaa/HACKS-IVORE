import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HACKS IVOIRE | Equipment Support Côte d'Ivoire" },
      {
        name: "description",
        content:
          "Contact HACKS IVOIRE about heavy equipment rental, drilling support, fleet management and field maintenance requirements in Côte d'Ivoire and West Africa.",
      },
      { property: "og:title", content: "Contact HACKS IVOIRE" },
      { property: "og:description", content: "Discuss your equipment or operational support requirement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
