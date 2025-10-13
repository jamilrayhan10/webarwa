"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import MobileMenu from "./MobileMenu";
import { useState } from "react";


export default function HeaderThree() {
  const { hidden, sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className={`site-header azzle-header-section ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/">
                  <img src="/assets/images/logo-1-dark.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="azzle-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <Navmenu />
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="azzle-header-button-wraper">
                <div className="azzle-header-login-button button4">
                  <ul>
                    <li>
                      <Link href="/sign-in">Login</Link>
                    </li>
                  </ul>
                </div>
                <Link className="rk-theme-default-btn azzle-header-btn btn2" href="/sign-up" data-text="Sign up free">
                  <span className="button-wraper">Sign up free</span>
                </Link>
              </div>
              <div className="azzle-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- Brand Logo--> */}
                  {/* <!-- mobile menu trigger --> */}
                  <button onClick={() => setIsOpen(!isOpen)} className="azzle-menu-toggle d-inline-block d-lg-none">
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
