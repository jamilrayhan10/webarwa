import products_data from "@/data/products-data";
import Link from "next/link";

export default function FeaturedTemplates() {
  return (
    <div className="rk-theme-section-padding6">
      <div className="container">


        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 text-center">
            <div className="rk-theme-section-title text-center">
              <h2>Featured Templates</h2>
              <p>
                Explore our curated selection of popular and trending Next.js templates that have set the standard for web development.
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="rk-theme-template-btn-area">
            <div className="rk-theme-template-btn text-center">
              <button className="active"><Link href="/templates">All</Link></button>
              <button><Link href="/templates">Starter</Link></button>
              <button><Link href="/templates">SaaS</Link></button>
              <button><Link href="/templates">Software</Link></button>
              <button><Link href="/templates">Business</Link></button>
            </div>
          </div>
        </div>

        <div className="row">
          {products_data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="single-post-item rk-theme-template" data-aos="fade-up" data-aos-delay="500">
                <div className="post-thumbnail">
                  <img src={item.thumb} style={{ width: "100%" }} alt="" />
                </div>
                <div className="post-content rk-theme-template-title">
                  <Link href="/single-blog">
                    <h3 className="entry-title">
                      {item.title}
                    </h3>
                  </Link>
                  <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
                </div>
                <div className="rk-theme-btn-area text-center">
                  <div className="preview-btn">
                    <Link href="/templates">
                      Preview
                    </Link>
                  </div>
                  <div className="download-btn">
                    <Link href="/templates">
                      Download
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))}


{/* 
          <div className="col-lg-6">
            <div className="single-post-item rk-theme-template" data-aos="fade-up" data-aos-delay="500">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.png" style={{ width: "100%" }} alt="" />
              </div>
              <div className="post-content">
                <Link href="/single-blog">
                  <h3 className="entry-title">
                    10 ways to supercharge startup with AI integration
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
              <div className="rk-theme-btn-area text-center">
                <div className="preview-btn">
                  <Link href="/templates">
                    Preview
                  </Link>
                </div>
                <div className="download-btn">
                  <Link href="/templates">
                    Download
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="single-post-item rk-theme-template" data-aos="fade-up" data-aos-delay="500">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.png" style={{ width: "100%" }} alt="" />
              </div>
              <div className="post-content">
                <Link href="/single-blog">
                  <h3 className="entry-title">
                    10 ways to supercharge startup with AI integration
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
              <div className="rk-theme-btn-area text-center">
                <div className="preview-btn">
                  <Link href="/templates">
                    Preview
                  </Link>
                </div>
                <div className="download-btn">
                  <Link href="/templates">
                    Download
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="single-post-item rk-theme-template" data-aos="fade-up" data-aos-delay="500">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.png" style={{ width: "100%" }} alt="" />
              </div>
              <div className="post-content">
                <Link href="/single-blog">
                  <h3 className="entry-title">
                    10 ways to supercharge startup with AI integration
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
              <div className="rk-theme-btn-area text-center">
                <div className="preview-btn">
                  <Link href="/templates">
                    Preview
                  </Link>
                </div>
                <div className="download-btn">
                  <Link href="/templates">
                    Download
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="single-post-item rk-theme-template" data-aos="fade-up" data-aos-delay="500">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.png" style={{ width: "100%" }} alt="" />
              </div>
              <div className="post-content">
                <Link href="/single-blog">
                  <h3 className="entry-title">
                    10 ways to supercharge startup with AI integration
                  </h3>
                </Link>
                <p>Build faster with our collection of React, Next.js, Vue, and Nuxt templates, boilerplates, and starter kits. Whether it’s a landing page, dashboard.</p>
              </div>
              <div className="rk-theme-btn-area text-center">
                <div className="preview-btn">
                  <Link href="/templates">
                    Preview
                  </Link>
                </div>
                <div className="download-btn">
                  <Link href="/templates">
                    Download
                  </Link>
                </div>
              </div>
            </div>

          </div> */}


        </div>
      </div>
    </div>
  )
}
