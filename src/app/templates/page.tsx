import Templates from "@/components/templates";
 
export const metadata = {
  title: "WebArwa Templates – High-Quality Web Templates & Themes",
  description: "Explore and download premium web templates and themes for React, Vue, and Next.js. Perfect for websites, portfolios, and projects.",
  keywords: [
    "web templates",
    "React templates",
    "Vue templates",
    "Next.js templates",
    "premium templates",
    "WebArwa",
  ],
  openGraph: {
    title: "WebArwa Templates – Premium Web Templates",
    description: "Browse modern, responsive web templates for developers and designers.",
    url: "https://webarwa.com/templates",
    siteName: "WebArwa",
    images: [
      {
        url: "https://webarwa.com/templates-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "WebArwa Templates Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebArwa Templates – Premium Web Templates",
    description: "Browse and download high-quality templates built with React, Vue, and Next.js.",
    images: ["https://webarwa.com/templates-og-image.jpg"],
    creator: "@webarwa",
  },
};


 
export default function index() {
  return (
    <Templates />
  )
}
