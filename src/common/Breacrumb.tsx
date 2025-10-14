import Link from "next/link";
interface BreacrumbProps {
  title?: string;
  page?: string;
}


export default function Breacrumb({ title, page }: BreacrumbProps) {
  return (
    <div className="rk-theme-breadcrumb">
      <div className="container">
        <div className="rk-theme-breadcrumb-content mb-5">
          <div className="rk-theme-breadcrumb-wrapper" data-aos="fade-up" data-aos-delay="700">
            <div className="rk-theme-breadcrumb-wrap rk-theme-breadcrumb-info">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <h3>30+ Best Free and Premium React.js <br /> Next.js Vue.js and Nuxt.js Templates for Your Next Projects</h3>
                  <p>Discover a wide range of high-quality Next.js templates for your web projects. Choose from our selection of free, open-source, and premium options to build stunning and functional Next.js websites and web apps effortlessly. Explore a diverse collection of handcrafted and ready-to-use templates and starters to kickstart your next project quickly — built with the latest Next.js, React 18, and TypeScript for optimal performance and ease of use.</p>

                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-line"></div>
    </div>
  )
}
