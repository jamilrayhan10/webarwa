import HomeOne from "@/components/homes/home-1";

 // app/page.tsx
export const metadata = {
  title: "WebArwa – Premium Web Templates & Themes",
  description: "Buy and download high-quality web templates and themes built with React, Vue, and Next.js.",
  keywords: ["web templates", "React themes", "Next.js templates", "Vue templates", "WebArwa"],
  openGraph: {
    title: "WebArwa – Premium Web Templates",
    description: "Modern, responsive templates for web creators.",
    url: "https://webarwa.com",
    siteName: "WebArwa",
    images: [
      {
        url: "https://webarwa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebArwa Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    languages: {
      en: "https://webarwa.com/en",
      bn: "https://webarwa.com/bn",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "WebArwa – Premium Web Templates",
    description: "Responsive web templates for React, Vue, and Next.js.",
    images: ["https://webarwa.com/og-image.jpg"],
    creator: "@webarwa",
  },
};




export default function index() {
  return (
    <HomeOne />
  )
}
