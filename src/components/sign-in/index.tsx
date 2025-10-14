import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";



export default function Signin() {
  return (
    <Wrapper>

      <div className="rk-theme-extra-header">
        <div className="container">
          <div className="rk-theme-extra-logo">
            <Link href="/">
              <img src="assets/images/logo/logo-dark.svg" alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- End section --> */}

      <div className="rk-theme-account-section">
        <div className="container">
          <div className="rk-theme-account-header">
            <h1>Welcome back</h1>
          </div>
          <div className="rk-theme-account-box">
            <form action="#">
              <div className="rk-theme-contact-field mb24">
                <label>Email address</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="rk-theme-contact-field mb24">
                <label>Enter Password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="rk-theme-forget-password">
                <div className="rk-theme-check-field">
                  <input type="checkbox" id="css" />
                  <label htmlFor="css">Remember me</label>
                </div>
                <a href="">Forgot password?</a>
              </div>

              <button id="rk-theme-main-submit-btn" className="w-100" type="button">Sign in</button>
              <div className="rk-theme-account-or">
                <p>or</p>
              </div>
            </form>
            <div className="rk-theme-account-social-wrap">
              <a className="rk-theme-account-social" href="https://www.google.com/">
                <img src="assets/images/contact/google.png" alt="google" />
                Sign up with Google
              </a>
              <a className="rk-theme-account-social" href="https://www.facebook.com/">
                <img src="assets/images/contact/facebook.png" alt="facebook" />
                Sign up with Facebook
              </a>
            </div>
            <div className="rk-theme-accout-footer">
              <p>Not a member yet? <Link href="/sign-up">Sign up here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
