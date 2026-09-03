import { createFileRoute } from "@tanstack/react-router";
import { SafetyPage } from "@/pages/SafetyPage";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Standards | Hacks Ivore" },
      {
        name: "description",
        content:
          "Hacks Ivore's approach to equipment inspection, PPE, risk awareness, preventive maintenance and responsible field operations.",
      },
      { property: "og:title", content: "Safety & Standards | Hacks Ivore" },
      { property: "og:description", content: "Safety is part of the operation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: SafetyPage,
});
