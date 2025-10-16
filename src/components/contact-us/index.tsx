import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";
import FooterTwo from "@/layouts/footers/FooterTwo";

 




type ContactusProps = {
  sendMail: (data: FormData) => Promise<{ success: boolean; error?: string }>;
};



export default function Contactus({ sendMail }: ContactusProps) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Contact Us" page="Contact Us" />
          {/* <ContactArea /> */}
          <ContactArea senMail={sendMail as any} /> 
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  )
}
