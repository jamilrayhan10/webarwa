"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; 
 

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={`site-header rk-theme-header-section section2 ${sticky ? "sticky-menu" : ""}`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt="logo" />   
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="rk-theme-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <Navmenu menu_style={true} />                   
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="rk-theme-header-button-wraper">
                {/* <div className="rk-theme-header-login-button">
                  <ul>
                    <li>
                      <Link href="/sign-in">Login</Link>
                    </li>
                  </ul>
                </div> */}
                <Link className="rk-theme-default-btn rk-theme-header-btn" href="#" data-text="Account">
                  <span className="button-wraper">Account</span>
                </Link>
              </div>
              <div className="rk-theme-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- Brand Logo--> */}
                  {/* <!-- mobile menu trigger --> */}
                  <button onClick={() => setIsOpen(!isOpen)} className="rk-theme-menu-toggle toggle2 d-inline-block d-lg-none">
                    <span></span>
                  </button>
                  {/* <!--/.Mobile Menu Hamburger Ends--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}
