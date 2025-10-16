import Service from "@/components/service";
 
export const metadata = {
  title: "Service WebArwa Services – Web Development & Template Solutions",
  description: "Discover premium web development services and template customization solutions from WebArwa. Perfect for websites, portfolios, and business projects.",
  keywords: [
    "web development services",
    "template customization",
    "React services",
    "Vue services",
    "Next.js services",
    "WebArwa",
  ],
  openGraph: {
    title: "WebArwa Services – Professional Web Solutions",
    description: "High-quality web development services and template solutions for developers and businesses.",
    url: "https://webarwa.com/service",
    siteName: "WebArwa",
    images: [
      {
        url: "https://webarwa.com/service-og-image.jpg",  
        width: 1200,
        height: 630,
        alt: "WebArwa Services Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebArwa Services – Professional Web Solutions",
    description: "Get premium web development services and template customization for React, Vue, and Next.js projects.",
    images: ["https://webarwa.com/service-og-image.jpg"],
    creator: "@webarwa",
  },
};



export default function index() {
  return (
    <Service />
  )
}
