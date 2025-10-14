import Link from "next/link";


export default function BlogHomeThree() {
  return (
    <section className="section rk-theme-section-padding rk-theme-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="rk-theme-section-title title3 center max-w-1000" data-aos="fade-up" data-aos-delay="500">
            <h3>Our Latest Blogs</h3>
            <p>Blog Section dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
        <div className="col-lg-1"></div>
        </div>
        


        <div className="row">
          <div className="col-xl-4">
            <div className="single-post-item" data-aos="fade-up" data-aos-delay="500">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.png" alt="" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <div className="post-category">
                    <a href="#">Marketing</a>
                  </div>
                  <div className="post-date">
                    June 18, 2025
                  </div>
                </div>
                <Link href="#">
                  <h3 className="entry-title">
                    10 ways to supercharge startup with AI integration
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-post-item" data-aos="fade-up" data-aos-delay="600">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog2.png" alt="" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <div className="post-category">
                    <a href="#">Business</a>
                  </div>
                  <div className="post-date">
                    June 16, 2025
                  </div>
                </div>
                <Link href="#">
                  <h3 className="entry-title">
                    Testing AI tools to improve product descriptions
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-post-item" data-aos="fade-up" data-aos-delay="700">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog3.png" alt="" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <div className="post-category">
                    <a href="#">Technology</a>
                  </div>
                  <div className="post-date">
                    June 14, 2025
                  </div>
                </div>
                <Link href="#">
                  <h3 className="entry-title">
                    3 best AI businesses to make money with in 2024
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
