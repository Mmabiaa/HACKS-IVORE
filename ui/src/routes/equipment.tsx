import { createFileRoute } from "@tanstack/react-router";
import { EquipmentPage } from "@/pages/EquipmentPage";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Heavy Equipment Catalogue Côte d'Ivoire | HACKS IVOIRE" },
      {
        name: "description",
        content:
          "Excavators, bulldozers, loaders, dump trucks, forklifts, drilling and support equipment for mining, quarrying and earthmoving operations in Côte d'Ivoire and West Africa.",
      },
      { property: "og:title", content: "Equipment Catalogue | HACKS IVOIRE" },
      { property: "og:description", content: "Equipment for the work ahead." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/equipment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/equipment" }],
  }),
  component: EquipmentPage,
});
