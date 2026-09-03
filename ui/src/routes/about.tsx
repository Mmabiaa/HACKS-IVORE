import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hacks Ivore | Industrial Field Support Ghana" },
      {
        name: "description",
        content:
          "Learn how Hacks Ivore approaches heavy equipment, drilling and practical field support for demanding operations.",
      },
      { property: "og:title", content: "About Hacks Ivore" },
      { property: "og:description", content: "Built around the realities of demanding operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
