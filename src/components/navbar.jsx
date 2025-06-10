'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../componentsStyle/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setOpenSubMenu(null);
  };

  const toggleSubMenu = (menuName, e) => {
    e.stopPropagation();
    if (openSubMenu === menuName) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menuName);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  };

  return (
    <section className="container">
      <header className="position-relative">
        <div className="d-flex align-items-center justify-content-between custom-navbar">
          <div className="d-flex align-items-center gap-4">
            <div className="bars-icon-dislpay" onClick={toggleMenu}>
              <i className="fa-solid fa-bars text-white"></i>
            </div>
            <div>
              <Link href="/" onClick={closeAllMenus}>
                <img src="/assets/img/logo.png" alt="Logo" width={70} />
              </Link>
            </div>

            <div className={`custom-navbar-wrapper ${menuOpen ? 'active' : ''}`}>
              <div onClick={toggleMenu} className="bars-icon-dislpay text-end text-white">
                <i className="fa-solid fa-xmark"></i>
              </div>
              <ul className="d-md-flex d-block align-items-xl-center  gap-3 m-0 p-0">
                <li className="list-style-none">
                  <Link href="/" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12">home</Link>
                </li>
                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href="/about" className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">about</Link>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 text-white fs-10 cursor-pointer d-xl-none ${openSubMenu === 'about' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('about', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'pages' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Introduction</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Vision</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Mission</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/cases" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Governing Body</Link></li>
                  </ul>
                </li>

                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">Our Works</span>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 text-white fs-10 cursor-pointer d-xl-none ${openSubMenu === 'works' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('works', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'works' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Animal Welfare</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Livelihood</Link></li>
                  </ul>
                </li>

                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">Campaigns</span>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 fs-10 text-white cursor-pointer d-xl-none ${openSubMenu === 'campaigns' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('campaigns', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'campaigns' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Eradicating Dog Mediated Rabies by 2030</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Reducing Stray Dog Hit & Run Road Fatalities</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Vaccinating Stray Dogs against life threatnening diseases</Link></li>
                  </ul>
                </li>

                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">Volunteer</span>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 fs-10 text-white cursor-pointer d-xl-none ${openSubMenu === 'volunteer' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('volunteer', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'volunteer' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Get Involved</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/supportUs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">supportUs</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Sponsor</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">Donate</Link></li>
                    <li className="list-style-none py-2"><Link href="/testimonials" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">Testimonials</Link></li>
                  </ul>
                </li>
                <li className="list-style-none py-2"><Link href="/workus" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">Work with Us</Link></li>
                <li className="list-style-none py-2"><Link href="/gallery" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">Gallery</Link></li>
                <li className="list-style-none py-2"><Link href="/newsEvents" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">News & Events</Link></li>
                <li className="list-style-none py-2"><Link href="/imStories" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">Impact Stories</Link></li>

                <li className="list-style-none py-2"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <button className="py-2 px-3 text-uppercase fs-12 border-0 cutom-all-bg text-white fw-bold">get involved</button>
          </div>
        </div>
      </header>
    </section>
  );
}
