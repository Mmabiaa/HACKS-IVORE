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
  { number: "01", title: "Equipment Rental", header: "Complete Equipment Fleet", description: "Comprehensive fleet of heavy equipment for mining, construction, and infrastructure projects.", image: heroImage },
  { number: "02", title: "Drilling Support", header: "Full Drilling Operations", description: "Complete drill rig operations, mobilization, recovery, and field mechanical support.", image: drillingImage },
  { number: "03", title: "Fleet Management", header: "Maximum Uptime Guaranteed", description: "Preventive maintenance, inspections, and comprehensive planning for maximum uptime.", image: recoveryImage },
  { number: "04", title: "Field Support Services", header: "Rapid Response Maintenance", description: "Rapid response maintenance, equipment care, and fuel management services.", image: maintenanceImage },
  { number: "05", title: "Integrated Logistics", header: "24/7 Support Logistics", description: "Complete support logistics for 24/7 mining and construction operations.", image: heroImage },
];

export const equipment = [
  ["Skidders", "Heavy-duty equipment for challenging terrain", heroImage],
  ["Excavators", "Excavation, loading and earthmoving", heroImage],
  ["Bulldozers", "Site preparation, clearing and grading", recoveryImage],
  ["Motor Graders", "Precision road grading and maintenance", maintenanceImage],
  ["Wheel Loaders", "Material handling and stockpile work", maintenanceImage],
  ["Dump Trucks", "Haulage and material movement", drillingImage],
  ["Telehandlers", "Versatile material placement", maintenanceImage],
  ["Forklifts", "Site logistics and material handling", maintenanceImage],
  ["Water Bowsers", "Water supply and dust suppression", drillingImage],
  ["Fuel Bowsers", "Mobile fuel distribution", drillingImage],
  ["Service Trucks", "Mobile workshop and field support", recoveryImage],
  ["Lighting Towers", "Portable illumination for night work", maintenanceImage],
  ["Air Compressors", "Compressed air supply", drillingImage],
  ["Generators", "Reliable power generation", drillingImage],
  ["Drilling Equipment", "Drilling and operational support", drillingImage],
  ["Support Equipment", "Recovery, towing and site support", recoveryImage],
] as const;

export const equipmentCategories = [
  "All Equipment", "Skidders", "Excavators", "Bulldozers", "Motor Graders", "Loaders",
  "Dump Trucks", "Telehandlers", "Forklifts", "Water Bowsers", "Fuel Bowsers",
  "Service Trucks", "Lighting Towers", "Air Compressors", "Generators",
  "Drilling Equipment", "Support Equipment",
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
