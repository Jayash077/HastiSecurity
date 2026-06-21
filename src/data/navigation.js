

import { getCatalogBySlug, solutionsCatalog } from "./solutionsCatalog";

/** Build children dynamically from catalog */
const catalogChildren = (slug) => {
  const entry = getCatalogBySlug(slug);
  if (!entry) return undefined;

  if (entry.sections) {
    return entry.sections.map((s) => ({
      title: s.title,
      anchor: s.anchor,
    }));
  }

  if (entry.items) {
    return entry.items.map((item) => ({
      title: item,
      anchor: item
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    }));
  }

  return undefined;
};

/** Solution categories data */
export const solutionCategories = [
  {
    title: "Electronic Safety & Security",
    slug: "electronic-safety-security",
    description:
      "Integrated electronic security for offices, plants, and campuses — access, detection, and visibility.",
    children: catalogChildren("electronic-safety-security"),
    featuredTitle: "End-to-end safety stack for modern buildings",
    featuredBody:
      "Design, integration, and AMC for access, attendance, intrusion, and network layers — with a single accountable partner.",
  },
  {
    title: "CCTV Security Camera",
    slug: "cctv-security-camera",
    description:
      "Analog, IP, PTZ, and thermal cameras with structured cabling, storage, and remote viewing.",
    children: catalogChildren("cctv-security-camera"),
    featuredTitle: "Surveillance that stays reliable in the field",
    featuredBody:
      "Site surveys, brand-neutral recommendations, and commissioning tuned to lighting, bandwidth, and retention policies.",
  },
  {
    title: "Solar Energy",
    slug: "solar-energy",
    description:
      "Rooftop and commercial solar — design, subsidy support, net metering, and performance monitoring.",
    children: catalogChildren("solar-energy"),
    featuredTitle: "Solar built for ROI and compliance",
    featuredBody:
      "Grid-tied and hybrid systems with transparent BOM, safety-first installation, and long-term O&M options.",
  },
  {
    title: "Nextview",
    slug: "nextview",
    description:
      "Displays and wellness products for retail, hospitality, and smart spaces.",
    children: catalogChildren("nextview"),
    featuredTitle: "Nextview display & environment lineup",
    featuredBody:
      "Curated SKUs, installation, and after-sales for LED and QLED lines plus air quality solutions.",
  },
];

/** Re-export catalog */
export { solutionsCatalog };

/** Route helpers */
export function solutionPath(slug) {
  return `/solutions/${slug}`;
}

export function solutionChildPath(slug, anchor) {
  return `${solutionPath(slug)}#${anchor}`;
}