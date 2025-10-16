import Breacrumb from "@/common/Breacrumb"; 
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceArea from "./ServiceArea"; 
import FooterTwo from "@/layouts/footers/FooterTwo";
import ServiceJsonLD from "../seo/ServiceJsonLD";



export default function Service() {
  return (
    <Wrapper>
      <ServiceJsonLD />
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Our Services" page="Our Services" />
          <ServiceArea />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  )
}
