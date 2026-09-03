import { createFileRoute } from "@tanstack/react-router";
import { RequestQuotePage } from "@/pages/RequestQuotePage";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Hacks Ivore Drilling & Mining" },
      {
        name: "description",
        content:
          "Submit an equipment, drilling support, recovery, maintenance or site support requirement to Hacks Ivore for review and response.",
      },
      { property: "og:title", content: "Request a Quote | Hacks Ivore" },
      { property: "og:description", content: "Tell us what the operation needs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/request-quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: RequestQuotePage,
});
