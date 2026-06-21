function anchorFrom(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function section(title, items) {
  return {
    title,
    anchor: anchorFrom(title),
    items,
  };
}

export const solutionsCatalog = [
  {
    slug: "electronic-safety-security",
    title: "Electronic Safety & Security",
    sections: [
      section("Access Control System", [
        "Automatic Doors",
        "Boom Barrier",
        "Flap Barrier",
        "RFID Cards",
        "Road Blocker",
        "Tripod Turnstile",
        "Video Door Phones",
      ]),
      section("Scanning & Detection System", [
        "Baggage Scanner",
        "Door Frame Metal Detector",
        "Electronic Article Surveillance",
        "Hand Held Metal Detector",
        "Under Vehicle Scanning System",
      ]),
      section("Attendance System", [
        "Time Attendance",
        "Guard Tour System",
      ]),
      section("Intrusion Detection System", [
        "Burglar Alarm",
        "Electric Fence",
        "Laser Sensor",
        "Fire Alarm Systems",
        "Smoke Detectors",
      ]),
      section("Tracking System", [
        "Asset Tracking System",
        "GPS Vehicle Tracking",
        "Student Tracking System",
      ]),
      section("Network & Communication", [
        "CAT6 Cables",
        "EPABX / IP PBX System",
        "Optical Fiber Cables (OFC)",
        "Server and Workstations",
      ]),
      section("Networking Components & Accessories", [
        "PoE, Managed and Unmanaged Switches",
        "Managed and Unmanaged Network Switches",
        "Networking Accessories",
        "Networking Racks",
        "LIU, Patch Cord, and Panels",
        "SFP Modules",
      ]),
    ],
  },

  {
    slug: "cctv-security-camera",
    title: "CCTV Security Camera",
    items: [
      "Fixed Box Cameras",
      "Modular Cameras",
      "Panoramic Cameras",
      "Positioning Cameras",
      "Thermal Cameras",
      "Fixed Bullet Cameras",
      "Fixed Dome Cameras",
      "Onboard Cameras",
      "PTZ Cameras",
      "HD Cameras",
      "Network Cameras",
    ],
  },

  {
    slug: "solar-energy",
    title: "Solar Energy",
    items: [
      "Minimal Electricity Bill Systems",
      "One-Time Investment Panels",
      "Fossil Fuel Reduction Solutions",
      "Environment-Friendly Systems",
      "Water-Preserving PV Systems",
      "Pollution-Free Installations",
    ],
  },

  {
    slug: "nextview",
    title: "Nextview",
    items: ["Full HD LED TV", "Smart LED TV", "4K Smart LED TV", "QLED TV", "Air Purifier"],
  },
];

export function getCatalogBySlug(slug) {
  return solutionsCatalog.find((c) => c.slug === slug);
}