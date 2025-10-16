
"use client"; 
import Script from "next/script";

interface AboutJsonLDProps {
  name?: string;
  url?: string;
  logo?: string;
  socialLinks?: string[];
  contactEmail?: string;
  contactUrl?: string;
}

export default function AboutJsonLD({
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
}: AboutJsonLDProps) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "sameAs": socialLinks,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": contactEmail,
      "contactType": "customer support",
      "url": contactUrl,
    },
  };

  return (
    <Script id="about-jsonld" type="application/ld+json">
      {JSON.stringify(jsonLD)}
    </Script>
  );
}

