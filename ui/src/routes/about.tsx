import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HACKS IVOIRE | Mining Equipment Rental Côte d'Ivoire" },
      {
        name: "description",
        content:
          "Learn about HACKS IVOIRE's commitment to providing world-class mining equipment rental and drilling support services throughout Côte d'Ivoire and West Africa.",
      },
      { property: "og:title", content: "About HACKS IVOIRE" },
      { property: "og:description", content: "Built around the realities of demanding operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
