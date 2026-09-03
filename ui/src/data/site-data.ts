import heroImage from "@/assets/hero-excavator.jpg";
import maintenanceImage from "@/assets/field-maintenance.jpg";
import drillingImage from "@/assets/drilling-support.jpg";
import recoveryImage from "@/assets/equipment-recovery.jpg";

export const images = { heroImage, maintenanceImage, drillingImage, recoveryImage };

export const navItems = [
  ["About", "/about"], ["Services", "/services"], ["Equipment", "/equipment"],
  ["Field Experience", "/field-experience"], ["Safety & Standards", "/safety"],
  ["Insights", "/insights"], ["Contact", "/contact"],
] as const;

export const services = [
  { number: "01", title: "Equipment Supply", description: "Excavators, bulldozers, loaders, dump trucks, forklifts and other equipment for earthmoving, material handling and site support.", image: heroImage },
  { number: "02", title: "Drilling Support", description: "Support for drill rig operations, mobilization and demobilization, towing, route clearing and field mechanical requirements.", image: drillingImage },
  { number: "03", title: "Recovery & Towing", description: "Winching, equipment recovery and towing support when equipment becomes immobilized in the field.", image: recoveryImage },
  { number: "04", title: "Fleet & Field Maintenance", description: "Lubrication, radiator servicing, equipment washing, fuel management, breakdown assistance and maintenance planning.", image: maintenanceImage },
  { number: "05", title: "Site Support", description: "Practical equipment and field support designed around the requirements of active operations.", image: heroImage },
];

export const equipment = [
  ["Excavators", "Excavation, loading and earthmoving", heroImage],
  ["Bulldozers", "Site preparation, clearing and grading", recoveryImage],
  ["Wheel Loaders", "Material handling and stockpile work", maintenanceImage],
  ["Dump Trucks", "Haulage and material movement", drillingImage],
  ["Forklifts", "Site logistics and material handling", maintenanceImage],
  ["Drilling Equipment", "Drilling and operational support", drillingImage],
  ["Support Equipment", "Recovery, towing and site support", recoveryImage],
] as const;

export const equipmentCategories = [
  "All Equipment", "Excavators", "Bulldozers", "Loaders", "Dump Trucks",
  "Forklifts", "Drilling Equipment", "Support Equipment",
] as const;

export type EquipmentItem = {
  name: string;
  category: (typeof equipmentCategories)[number];
  application: string;
  image: string;
};

export const equipmentCatalogue: EquipmentItem[] = [
  { name: "Tracked Excavator", category: "Excavators", application: "Bulk excavation, trenching and loading in mining and construction environments.", image: heroImage },
  { name: "Wheeled Excavator", category: "Excavators", application: "Excavation and material handling where mobility across site is required.", image: drillingImage },
  { name: "Crawler Bulldozer", category: "Bulldozers", application: "Site preparation, clearing, grading and push-loading work.", image: recoveryImage },
  { name: "Wheel Loader", category: "Loaders", application: "Stockpile handling, loading haul trucks and general material movement.", image: maintenanceImage },
  { name: "Backhoe Loader", category: "Loaders", application: "Combined loading and excavation for confined site tasks.", image: maintenanceImage },
  { name: "Articulated Dump Truck", category: "Dump Trucks", application: "Haulage over uneven terrain and soft ground conditions.", image: drillingImage },
  { name: "Rigid Dump Truck", category: "Dump Trucks", application: "Haul-road material movement on established site routes.", image: heroImage },
  { name: "Industrial Forklift", category: "Forklifts", application: "Yard logistics, material handling and equipment support tasks.", image: maintenanceImage },
  { name: "Drill Rig Support Unit", category: "Drilling Equipment", application: "Support for drill rig operations, mobilization and demobilization.", image: drillingImage },
  { name: "Route Clearing Equipment", category: "Drilling Equipment", application: "Access preparation and route clearing ahead of rig movement.", image: recoveryImage },
  { name: "Recovery & Towing Unit", category: "Support Equipment", application: "Winching, recovery and towing of immobilized equipment.", image: recoveryImage },
  { name: "Field Service Vehicle", category: "Support Equipment", application: "Breakdown response, lubrication and on-site mechanical support.", image: maintenanceImage },
  { name: "Equipment Wash Unit", category: "Support Equipment", application: "Equipment washing and housekeeping in support of maintenance.", image: maintenanceImage },
];
