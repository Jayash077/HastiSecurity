export const menuFeaturedImages = {
  "electronic-safety-security": "/menuFeatured/security.jfif",
  "cctv-security-camera": "/menuFeatured/cctv.jfif",
  "solar-energy": "/menuFeatured/solar.jfif",
  nextview: "/menuFeatured/display.jfif",
};

export function menuFeaturedSrc(slug) {
  return (
    menuFeaturedImages[slug] ||
    menuFeaturedImages["electronic-safety-security"]
  );
}