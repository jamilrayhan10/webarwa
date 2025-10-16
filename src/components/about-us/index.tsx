import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter"; 
import OurWorkArea from "./OurWorkArea";
import AboutTeam from "./AboutTeam"; 
import FooterTwo from "@/layouts/footers/FooterTwo";
import AboutJsonLD from "../seo/AboutJsonLD";

 










export default function Aboutus() {
  return (
    <Wrapper>
      <AboutJsonLD />
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="About Us" page="About Us" />
          <AboutArea />
          <AboutCounter /> 
          <OurWorkArea />
          <AboutTeam /> 
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  )
}
