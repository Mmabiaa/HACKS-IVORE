import { createFileRoute } from "@tanstack/react-router";
import { FieldExperiencePage } from "@/pages/FieldExperiencePage";

export const Route = createFileRoute("/field-experience")({
  head: () => ({
    meta: [
      { title: "Field Experience | Hacks Ivore Ghana" },
      {
        name: "description",
        content: "A representative view of Hacks Ivore equipment recovery and operational field support in Ghana.",
      },
      { property: "og:title", content: "Hacks Ivore Field Experience" },
      { property: "og:description", content: "Experience where the work happens." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/field-experience" }],
  }),
  component: FieldExperiencePage,
});
