
"use client"; 
import Script from "next/script";

interface HomeJsonLDProps {
  name?: string;
  url?: string;
  logo?: string;
  socialLinks?: string[];
  contactEmail?: string;
  contactUrl?: string;
}

export default function HomeJsonLD({
  name = "WebArwa",
  url = "https://webarwa.com",
  logo = "https://webarwa.com/logo.png",
  socialLinks = [
    "https://www.facebook.com/webarwa",
    "https://twitter.com/webarwa",
    "https://www.linkedin.com/company/webarwa",
  ],
  contactEmail = "support@webarwa.com",
  contactUrl = "https://webarwa.com/contact",
}: HomeJsonLDProps) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": name,
      "logo": {
        "@type": "ImageObject",
        "url": logo,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": contactEmail,
      "contactType": "customer support",
      "url": contactUrl,
    },
    "sameAs": socialLinks,
  };

  return (
    <Script id="home-jsonld" type="application/ld+json">
      {JSON.stringify(jsonLD)}
    </Script>
  );
}
