import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/pages/InsightsPage";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Equipment & Field Operations Insights | Hacks Ivore" },
      {
        name: "description",
        content: "Future practical articles on heavy equipment, maintenance, drilling, field operations and safety.",
      },
      { property: "og:title", content: "Hacks Ivore Insights" },
      { property: "og:description", content: "Practical perspectives for demanding operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});
