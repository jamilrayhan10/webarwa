
"use client";
import menu_data from '@/data/menu-data';
import Link from 'next/link'
import { useState } from 'react';
interface MobileMenuProps {
  setIsOpen?: Function;
  isOpen?: boolean;
}

export default function MobileMenu({ setIsOpen, isOpen }: MobileMenuProps) {
  const [navTitle, setNavTitle] = useState<string>("");
   const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const [navTitle2, setNavTitle2] = useState<string>("");
   const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };


  return (
    <>
    
      <div className={`rk-theme-menu-wrapper ${isOpen ? "rk-theme-body-visible" : ""}`} onClick={() => setIsOpen && setIsOpen(false)}>
        <div className="rk-theme-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <div className="rk-theme-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/images/log-dark.png" alt="logo" />
              </Link>
            </div>
            <button className="rk-theme-menu-toggle mobile" onClick={() => setIsOpen && setIsOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="rk-theme-mobile-menu">
            <ul>
              {menu_data.map((item, i) => (
                <li key={i} className={`${item.title === navTitle ? 'rk-theme-active' : ''} ${item.has_submenu ? 'menu-item-has-children rk-theme-item-has-children' : ''}`}>
                  <Link href={item.path}>{item.title}{item.has_submenu && <span className="rk-theme-mean-expand" onClick={() => openMobileMenu(item.title)}></span>}</Link>
                  {/* {item.has_submenu &&
                    <ul className={`sub-menu rk-theme-submenu ${item.title === navTitle ? 'rk-theme-open' : ''}`} style={{ display: navTitle === item.title ? "block" : "none", }}>
                      {item.sub_menus?.map((sub_item, index) => (
                        <li key={index} className={`${sub_item.title === navTitle2 ? 'rk-theme-active' : ''} ${sub_item.has_inner_submenu ? 'menu-item-has-children rk-theme-item-has-children' : ''}`}>
                          <Link className="no-border" href={sub_item.path}>{sub_item.title}
                            {sub_item.has_inner_submenu && <span className="rk-theme-mean-expand" onClick={() => openMobileMenu2(sub_item.title)}></span>}
                          </Link>
                          {sub_item.has_inner_submenu &&
                            <ul className="sub-menu rk-theme-submenu" style={{ display: navTitle2 === sub_item.title ? "block" : "none", }}>
                              {sub_item.sub_menus?.map((inner_item, idx) => (
                                <li key={idx}>
                                  <Link href={inner_item.path}>{inner_item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          }
                        </li>
                      ))}
                    </ul>
                  } */}
                </li>
              ))}
            </ul>
          </div>
          <div className="rk-theme-mobile-menu-btn">
            <Link className="rk-theme-default-btn sm-size" href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
