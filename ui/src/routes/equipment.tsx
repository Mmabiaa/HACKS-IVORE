import { createFileRoute } from "@tanstack/react-router";
import { EquipmentPage } from "@/pages/EquipmentPage";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Heavy Equipment Catalogue Ghana | Hacks Ivore" },
      {
        name: "description",
        content:
          "Excavators, bulldozers, loaders, dump trucks, forklifts, drilling and support equipment for mining, quarrying and earthmoving operations in Ghana.",
      },
      { property: "og:title", content: "Equipment Catalogue | Hacks Ivore" },
      { property: "og:description", content: "Equipment for the work ahead." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/equipment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/equipment" }],
  }),
  component: EquipmentPage,
});
