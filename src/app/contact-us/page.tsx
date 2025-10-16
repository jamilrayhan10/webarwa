"use client";
import ContactArea, { FormData } from "@/components/contact-us/ContactArea";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breacrumb from "@/common/Breacrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";

 
export const metadata = {
  title: "Contact WebArwa – Get in Touch with Us",
  description: "Have questions or need support? Contact WebArwa for inquiries about templates, services, or custom solutions.",
  keywords: [
    "contact WebArwa",
    "support",
    "template inquiry",
    "web development support",
    "React templates",
    "Vue templates",
    "Next.js templates",
  ],
  openGraph: {
    title: "Contact WebArwa – Get in Touch",
    description: "Reach out to WebArwa for any questions about templates, customization, or web services.",
    url: "https://webarwa.com/contact",
    siteName: "WebArwa",
    images: [
      {
        url: "https://webarwa.com/contact-og-image.jpg",  
        width: 1200,
        height: 630,
        alt: "Contact WebArwa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebArwa – Get in Touch",
    description: "Contact WebArwa for questions about web templates, customization, or services.",
    images: ["https://webarwa.com/contact-og-image.jpg"],
    creator: "@webarwa",
  },
};



export default function ContactPage() {
  const sendMail = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.error(err);
      return { success: false, error: "Something went wrong." };
    }
  };

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Contact Us" page="Contact Us" />
          <ContactArea senMail={sendMail} />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  );
}
