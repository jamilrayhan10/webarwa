"use client";
import ContactArea, { FormData } from "@/components/contact-us/ContactArea";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breacrumb from "@/common/Breacrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";

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
