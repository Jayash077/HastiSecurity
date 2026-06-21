import { useEffect } from "react";
import { company } from "../data/siteContent";

const SITE_URL = `https://${company.domain}`;

function setMeta(name, content, property = false) {
  const attr = property ? "property" : "name";

  let el = document.querySelector(`meta[${attr}="${name}"]`);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');

  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }

  el.href = href;
}

export function usePageSeo({ title, description, path = "" }) {
  useEffect(() => {
    const fullTitle =
      path === "/" || path === ""
        ? `${company.name} | CCTV, Solar & Security Systems Indore`
        : `${title} | ${company.shortName}`;

    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    setCanonical(`${SITE_URL}${path === "/" ? "" : path}`);
  }, [title, description, path]);
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: SITE_URL,
    telephone: company.phonePrimary,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Indore",
      addressRegion: "MP",
      postalCode: "452001",
      addressCountry: "IN",
    },
    foundingDate: String(company.founded),
    areaServed: "IN",
  };
}