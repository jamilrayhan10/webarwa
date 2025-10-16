
"use client";
import Script from "next/script";

interface Service {
  name: string;
  description?: string;
  url: string;
}

interface ServiceJsonLDProps {
  organizationName?: string;
  url?: string;
  logo?: string;
  socialLinks?: string[];
  contactEmail?: string;
  contactUrl?: string;
  services?: Service[];
}

export default function ServiceJsonLD({
  organizationName = "WebArwa",
  url = "https://webarwa.com/services",
  logo = "https://webarwa.com/logo.png",
  socialLinks = [
    "https://www.facebook.com/webarwa",
    "https://twitter.com/webarwa",
    "https://www.linkedin.com/company/webarwa",
  ],
  contactEmail = "support@webarwa.com",
  contactUrl = "https://webarwa.com/contact",
  services = [
    { name: "Web Template Development", url: "https://webarwa.com/services/web-template-development" },
    { name: "UI/UX Design", url: "https://webarwa.com/services/ui-ux-design" },
  ],
}: ServiceJsonLDProps) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationName,
    "url": url,
    "logo": logo,
    "sameAs": socialLinks,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": contactEmail,
      "contactType": "customer support",
      "url": contactUrl,
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description || service.name,
          "url": service.url,
        },
        "position": index + 1,
      })),
    },
  };

  return (
    <Script id="service-jsonld" type="application/ld+json">
      {JSON.stringify(jsonLD)}
    </Script>
  );
}
