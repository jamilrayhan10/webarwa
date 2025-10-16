import Aboutus from "@/components/about-us"; 

export const metadata = {
  title: "About WebArwa – Premium Web Templates & Themes",
  description: "Learn about WebArwa, a leading provider of high-quality web templates and themes for React, Vue, and Next.js developers.",
  keywords: ["about WebArwa", "web templates", "React themes", "Next.js templates", "Vue templates", "UI kits"],
  robots: "index, follow",
  alternates: {
    canonical: "https://webarwa.com/about",
    languages: {
      en: "https://webarwa.com/en/about",
      bn: "https://webarwa.com/bn/about",
    },
  },
  openGraph: {
    title: "About WebArwa – Premium Web Templates",
    description: "Discover WebArwa, the hub for modern, responsive, and high-quality web templates for developers.",
    url: "https://webarwa.com/about",
    siteName: "WebArwa",
    images: [
      {
        url: "https://webarwa.com/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About WebArwa Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebArwa – Premium Web Templates",
    description: "Learn about WebArwa and our premium web templates for React, Vue, and Next.js.",
    images: ["https://webarwa.com/about-og-image.jpg"],
    creator: "@webarwa",
  },
};


 
export default function index() {
  return (
    <Aboutus />
  )
}
