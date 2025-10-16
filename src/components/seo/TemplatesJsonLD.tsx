
"use client";
import Script from "next/script";

interface TemplatesJsonLDProps {
  pageName?: string;
  url?: string;
  templates?: { position: number; url: string; name?: string }[];
}

export default function TemplatesJsonLD({
  pageName = "WebArwa Templates",
  url = "https://webarwa.com/templates",
  templates = [
    { position: 1, url: "https://webarwa.com/templates/template-1", name: "Template 1" },
    { position: 2, url: "https://webarwa.com/templates/template-2", name: "Template 2" },
  ],
}: TemplatesJsonLDProps) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": pageName,
    "url": url,
    "numberOfItems": templates.length,
    "itemListElement": templates.map((template) => ({
      "@type": "ListItem",
      "position": template.position,
      "url": template.url,
      "name": template.name,
    })),
  };

  return (
    <Script id="templates-jsonld" type="application/ld+json">
      {JSON.stringify(jsonLD)}
    </Script>
  );
}
