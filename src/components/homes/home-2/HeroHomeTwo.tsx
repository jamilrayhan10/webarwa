import Link from "next/link";


export default function HeroHomeTwo() {
  return (
    <div className="rk-theme-section rk-theme-hero-section2 section text-center" style={{ backgroundImage: "url(/assets/images/home2/hero-bg.png)" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="rk-theme-hero-content2 rk-theme-hero">
              <h1 className="rk-title" data-aos="fade-up" data-aos-delay="500">
                Build Faster with Ready-Made <br />
                React.js, Next.js, Vue.js & Nuxt.js Projects
                </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Boost productivity with our curated library of developer-grade templates and boilerplates built using React.js, Next.js, Vue.js, and Nuxt.js. Each project is optimized for speed, SEO, and scalability — perfect for building modern landing pages, SaaS products, and full-featured web apps effortlessly.               
              </p>
              <div className="mt-50" data-aos="fade-up" data-aos-delay="900">
                <Link className="rk-theme-default-btn btn2" href="/projects" data-text="Browse All Projects">
                  <span className="button-wraper">Browse All Projects</span> 
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div> 
        </div>
      </div>
    </div>
  )
}
