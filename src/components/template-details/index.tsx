import Breacrumb from "@/common/Breacrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TeamplateDetailsArea from "./TeamplateDetailsArea";

 

export default function TeamplateDetails({single_product} : any) {
  return (
    
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb />
          <TeamplateDetailsArea />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>

  )
}
