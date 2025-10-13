import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";
import FooterTwo from "@/layouts/footers/FooterTwo";

 

export default function Contactus() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Contact Us" page="Contact Us" />
          <ContactArea />
          <GoogleMap />          
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  )
}
