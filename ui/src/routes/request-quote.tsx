import { createFileRoute } from "@tanstack/react-router";
import { RequestQuotePage } from "@/pages/RequestQuotePage";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | HACKS IVOIRE Drilling & Mining" },
      {
        name: "description",
        content:
          "Submit an equipment rental, drilling support, fleet management, maintenance or site support requirement to HACKS IVOIRE for review and response.",
      },
      { property: "og:title", content: "Request a Quote | HACKS IVOIRE" },
      { property: "og:description", content: "Tell us what the operation needs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/request-quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: RequestQuotePage,
});
