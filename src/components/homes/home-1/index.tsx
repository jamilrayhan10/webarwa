import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper"; 
import FeaturesHomeOne from "./FeaturesHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import VideoHomeOne from "./VideoHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import FaqHomeOne from "./FaqHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeroHomeTwo from "../home-2/HeroHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import BlogHomeThree from "../home-3/BlogHomeThree";
import FeaturedTemplates from "./FeaturedTemplates";

export default function HomeOne() {
	return (
		<Wrapper>
			<HeaderOne />
			<div id="smooth-wrapper">
				<div id="smooth-content">
          <HeroHomeTwo /> 
          <FeaturedTemplates />
          <FeaturesHomeOne />
          {/* <AboutHomeOne /> */}
          {/* <VideoHomeOne /> */}
          {/* <PricingHomeOne /> */}
          {/* <TestimonialHomeOne /> */}
          {/* <FaqHomeOne style_2={true} /> */}
          <BlogHomeThree />
          <FooterTwo />
          {/* <FooterOne /> */}
        </div>
			</div>
		</Wrapper>
	);
}
