import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper"; 
import FeaturesHomeOne from "./FeaturesHomeOne";  
import FooterTwo from "@/layouts/footers/FooterTwo"; 
import FeaturedTemplates from "./FeaturedTemplates";
import HomeJsonLD from "@/components/seo/HomeJsonLD";
import HeroHomeTwo from "./HeroHomeTwo";
import BlogHomeThree from "./BlogHomeThree";

export default function HomeOne() {
	return (
		<Wrapper>
      <HomeJsonLD />
			<HeaderOne />
			<div id="smooth-wrapper">
				<div id="smooth-content">
          <HeroHomeTwo /> 
          <FeaturedTemplates />
          <FeaturesHomeOne /> 
          <BlogHomeThree />
          <FooterTwo /> 
        </div>
			</div>
		</Wrapper>
	);
}
