"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className="navbar">
        <div className="container">

          {/* LEFT NAME */}
          <div className="companyName">
            Anugraha Home Interior
          </div>

          {/* CENTER LOGO */}
          <div className="centerLogo">
            <img src="/photos/int_logo.png" alt="logo" />
          </div>

          {/* RIGHT MENU */}
          <nav className="menu">
            {menu.map((item, i) => (
              <Link href={item.path} key={i}>
                <button
                  className={`item ${active === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </nav>

          {/* MOBILE ICON */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

          {/* MOBILE MENU */}
          <div className={`mobileMenu ${open ? "open" : ""}`}>
            {menu.map((item, i) => (
              <Link href={item.path} key={i}>
                <button
                  className="item"
                  onClick={() => {
                    setActive(i);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

        </div>
      </header>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #0a0a0a;
          z-index: 1000;
          padding: 15px 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* LEFT NAME */
        .companyName {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          position: relative;
        }

        /* U SHAPE LINE */
        .companyName::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 20px;
          border-bottom: 2px solid #00aaff;
          border-radius: 50%;
          bottom: -10px;
          left: 0;
        }

        /* CENTER LOGO */
        .centerLogo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -10px;
          background: #000;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 0 20px #00aaff;
        }

        .centerLogo img {
          width: 70px;
          height: 70px;
          object-fit: contain;
        }

        /* RIGHT MENU */
        .menu {
          display: flex;
          gap: 10px;
        }

        .item {
          padding: 8px 14px;
          background: transparent;
          border: none;
          color: #aaa;
          cursor: pointer;
          border-radius: 20px;
          transition: 0.3s;
        }

        .item:hover,
        .item.active {
          color: #fff;
          box-shadow: 0 0 10px #00aaff;
        }

        /* MOBILE */
        .hamburger {
          display: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .mobileMenu {
          display: none;
        }

        @media (max-width: 768px) {
          .menu {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .mobileMenu {
            position: absolute;
            top: 70px;
            right: 10px;
            background: #111;
            padding: 10px;
            border-radius: 10px;
            display: none;
            flex-direction: column;
            width: 200px;
          }

          .mobileMenu.open {
            display: flex;
          }

          .item {
            width: 100%;
            text-align: left;
          }

          .centerLogo {
            top: -5px;
          }
        }
      `}</style>
    </>
  );
}