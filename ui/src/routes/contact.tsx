import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hacks Ivore | Equipment Support Ghana" },
      {
        name: "description",
        content:
          "Contact Hacks Ivore about heavy equipment, drilling, recovery, maintenance and field support requirements in Ghana.",
      },
      { property: "og:title", content: "Contact Hacks Ivore" },
      { property: "og:description", content: "Discuss your equipment or operational support requirement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
