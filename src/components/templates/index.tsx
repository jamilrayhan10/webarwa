import Breacrumb from "@/common/Breacrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TemplatesArea from "./TemplatesArea";
import TemplatesJsonLD from "../seo/TemplatesJsonLD";



export default function Templates() {
  return (
    <Wrapper>
      <TemplatesJsonLD />
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb />
          <TemplatesArea />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  )
}
