import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import SolutionsArea from "./SolutionsArea";
import OurWorkArea from "./OurWorkArea";
import AboutTeam from "./AboutTeam";
import AboutCta from "./AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
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
