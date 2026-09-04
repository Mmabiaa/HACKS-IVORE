import { createFileRoute } from "@tanstack/react-router";
import { SafetyPage } from "@/pages/SafetyPage";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Standards | HACKS IVOIRE" },
      {
        name: "description",
        content:
          "HACKS IVOIRE's commitment to Health, Safety & Environment (HSE) through equipment inspection, competent personnel, risk awareness, preventive maintenance and responsible field operations.",
      },
      { property: "og:title", content: "Safety & Standards | HACKS IVOIRE" },
      { property: "og:description", content: "Safety is part of the operation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: SafetyPage,
});
