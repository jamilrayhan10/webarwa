

export default function ContactArea() {
  return (
    <div className="rk-theme-section-padding" style={{marginBottom: '80px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="rk-theme-default-content pr70" data-aos="fade-up" data-aos-delay="700">
              <h2>Get in touch with us directly</h2>
              <p className="mb-0">We are here to help you! Tell us how we can help & we'll be in touch with an expert within the next 24 hours.</p>
              <div className="mt-50">
                <div className="rk-theme-contact-info-wrap">
                  <div className="rk-theme-contact-info-item">
                    <h5>Send us an email:</h5>
                    <a href="mailto:info@example.com">jamilrayhan10@gmail.com</a>
                  </div>
                  <div className="rk-theme-contact-info-item">
                    <h5>Give us a call:</h5>
                    <a href="tel:01300972752">+8801300972752</a>
                  </div>
                  <div className="rk-theme-contact-info-item">
                    <h5>Follow us:</h5>
                    <div className="rk-theme-social-wrap2 social-hover-orange">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com">
                            <img src="assets/images/home2/facebook.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <img src="assets/images/home2/twitter.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <img src="assets/images/home2/insta.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <img src="assets/images/home2/in.svg" alt="Icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rk-theme-contact-box" data-aos="fade-up" data-aos-delay="900">
              <form action="#">
                <div className="rk-theme-contact-column">
                  <div className="rk-theme-contact-field">
                    <label>Enter your name</label>
                    <input type="text" placeholder="Adam Smith" />
                  </div>
                  <div className="rk-theme-contact-field">
                    <label>Email address</label>
                    <input type="email" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div className="rk-theme-contact-column">
                  <div className="rk-theme-contact-field">
                    <label>Purchase Code</label>
                    <input type="number" placeholder="Purchase Code" />
                  </div>
                  <div className="rk-theme-contact-field">
                    <label>Template Name</label>
                    <input type="text" placeholder="Template Name" />
                  </div>
                </div>
                <div className="rk-theme-contact-field">
                  <label>Message</label>
                  <textarea name="message" placeholder="Write your message here..."></textarea>
                </div>
                <button id="rk-theme-main-submit-btn" type="button">Send your message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
