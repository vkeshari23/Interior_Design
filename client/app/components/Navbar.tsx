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
    { name: "Blog", path: "/blog", disabled: true },
  ];

  return (
    <>
      <header className="navbar">
        <div className="container">

          {/* LOGO */}
          <div className="logo">
            <div className="logo-wrapper">
              <img src="/photos/int_logo.png" alt="logo" className="logo-img" />
            </div>
            <span className="company-name">Anugraha Home</span>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

          {/* MENU */}
          <nav className={`menu ${open ? "open" : ""}`}>
            {menu.map((item, i) => (
              <Link href={item.path} key={i}>
                <button
                  className={`item ${active === i ? "active" : ""}`}
                  onClick={() => {
                    setActive(i);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </nav>

        </div>
      </header>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: linear-gradient(90deg, #0a0a0a, #1a1a1a);
          z-index: 1000;
          padding: 12px 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
        }

        .company-name {
          font-size: 20px;
          font-weight: bold;
        }

        .logo-img {
          width: 60px;
          height: 60px;
        }

        .menu {
          display: flex;
          gap: 10px;
        }

        .item {
          padding: 10px 16px;
          border: none;
          background: transparent;
          color: #aaa;
          cursor: pointer;
          border-radius: 8px;
          transition: 0.3s;
        }

        .item:hover {
          color: white;
          box-shadow: 0 0 10px #00aaff;
        }

        .item.active {
          color: white;
          box-shadow: 0 0 10px #00aaff;
        }

        .hamburger {
          display: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .menu {
            position: absolute;
            top: 70px;
            right: 16px;
            background: #111;
            flex-direction: column;
            padding: 12px;
            border-radius: 10px;
            display: none;
            width: 200px;
          }

          .menu.open {
            display: flex;
          }

          .item {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}