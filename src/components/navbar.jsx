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
              <ul className="d-md-flex d-block align-items-xl-center gap-4 m-0 p-0">
                <li className="list-style-none">
                  <Link href="/" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12">home</Link>
                </li>
                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">pages</span>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 text-white fs-10 cursor-pointer d-xl-none ${openSubMenu === 'pages' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('pages', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'pages' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">faqs</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">about us</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">contact</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/cases" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">cases / donations</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/events" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">events</Link></li>
                    <li className="list-style-none py-2"><Link href="/404" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">error 404</Link></li>
                  </ul>
                </li>
 
                <li className="list-style-none position-relative dropdown-parent">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-decoration-none custom-all-color-white text-uppercase fs-12 py-lg-4 py-2 mt-1">news</span>
                    <i
                      className={`fa-solid fa-caret-down ps-2 mt-1 fs-10 text-white cursor-pointer d-xl-none ${openSubMenu === 'news' ? 'rotate-180' : ''}`}
                      onClick={(e) => toggleSubMenu('news', e)}
                    ></i>
                  </div>
                  <ul className={`dropdown-wrapper p-0 ${openSubMenu === 'news' ? 'submenu-open' : ''}`}>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/faqs" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">post without sidebar</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">post with right sidebar</Link></li>
                    <li className="list-style-none py-2 dropdown-bottom-border"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none text-white text-uppercase fs-10">post with left sidebar</Link></li>
                  </ul>
                </li>

                <li className="list-style-none py-2"><Link href="/about" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">about us</Link></li>
                <li className="list-style-none py-2"><Link href="/contact" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">contact</Link></li>
                <li className="list-style-none py-2"><Link href="/events" onClick={closeAllMenus} className="text-decoration-none custom-all-color-white text-uppercase fs-12 ">events</Link></li>
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
