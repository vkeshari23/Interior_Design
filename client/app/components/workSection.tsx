"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Handshake, Users, PencilRuler, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WorkSection() {
  const steps = [
    {
      id: 1,
      title: "Meet Customers",
      icon: <Handshake size={40} strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Design Discussion",
      icon: <Users size={40} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Drafting Design",
      icon: <PencilRuler size={40} strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Implementation",
      icon: <Home size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="wrapper">
      {/* 🔥 PROCESS SECTION */}
      <div className="process">
        <h2>Our Work Process</h2>

        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="circle">
                <span>{step.icon}</span>
                <span className="number">{step.id}</span>
              </div>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 HERO SECTION */}
      <div className="hero">
        <div className="overlay">
          <h1>Think interior. Think Anugraha Home Interiors.</h1>
          <p>
            Interiors for all tastes and budgets. Choose from thousands of
            designs.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>

      {/* 🔥 FOOTER SECTION (3 COLUMN) */}
      <footer className="footer">
        <div className="footer-container">
          {/* COLUMN 1 (LOGO + ABOUT) */}
          <div className="footer-col logo-col">
            <div className="logoBox">
              <Image
                src="/photos/int_logo.png"
                alt="logo"
                width={120}
                height={80}
              />
              <h2>Anugraha Home Interiors</h2>
            </div>
            <p className="desc">
              We design elegant and functional interiors for homes, offices,
              hotels, and restaurants, blending style, comfort, and quality to
              create spaces that truly stand out.
            </p>
          </div>

          {/* COLUMN 2 (USEFUL LINKS) */}
          <div className="footer-col">
            <h3>USEFUL LINKS</h3>
            <div className="tags">
              <Link href="/">Home</Link>
              <br />
              <Link href="/aboutUs">About Us</Link>
              <br />
              <Link href="/services">Service</Link>
              <br />
              <Link href="/projects">Projects</Link>
              <br />
              <Link href="/contact">Contact Us</Link>
              <br />
              {/* <Link href="/blog">Blog</Link> */}
            </div>
          </div>

          {/* COLUMN 3 (SERVICES) */}
          <div className="footer-col">
            <h3>SERVICES</h3>
            <ul className="services">
              <li>Wardrobe</li>
              <li>Study Tables</li>
              <li>Electrical</li>
              <li>Plumbing</li>
              <li>False Ceiling</li>
              {/* <li>Painting</li>
              <li>Deep Cleaning</li>
              <li>Design Services</li>
              <li>Modular Kitchen</li> */}
            </ul>
          </div>

          {/* COLUMN 4 (CONTACT) */}
          <div className="footer-col">
            <h3>CONTACT US</h3>
            <p>📍 #13,2nd cross ,10th Main, Mathikere, Bengaluru - 560054</p>
            <br />
            <p>📞 +91 7259468707</p>
            <br />
            <p>✉️ info@anugrahahomeinteriors.in</p>
            <br />

            <div className="socials">
              <div className="diamond">
                <FaFacebookF />
              </div>
              <div className="diamond">
                <FaLinkedinIn />
              </div>
              <div className="diamond">
                <FaInstagram />
              </div>
              {/* <div className="diamond"><FaYoutube /></div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Anugraha Home Interior | All Rights Reserved</p>
          <p>Powered by Anugraha Home</p>
        </div>
      </footer>

      {/* 🔥 CSS */}
      <style jsx>{`
        .socials {
          display: flex;
          gap: 15px;
          font-size: 20px;
          margin-top: 10px;
        }

        .icon {
          color: #ccc;
          font-size: 22px;
          transition: all 0.3s ease;
          display: inline-flex;
        }

        .icon:hover {
          color: gold;
          transform: scale(1.3);
        }
        .wrapper {
          width: 100%;
        }

        /* PROCESS */
        .process {
          background: #0d0d0d;
          text-align: center;
          padding: 60px 20px;
          color: white;
        }

        .steps {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        // .circle {
        //   width: 90px;
        //   height: 90px;
        //   border-radius: 50%;
        //   background: #1a1a1a;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   position: relative;
        //   color: white;
        //   transition: 0.3s;
        //   border: 1px solid #2a2a2a;
        // }

        .circle {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #1a1a1a; /* light gray like image */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          // color: #333;
          color: white;
        }

        .circle:hover {
          box-shadow: 0 0 25px #3b82f6;
          transform: scale(1.1);
        }

        // .number {
        //   position: absolute;
        //   bottom: -5px;
        //   right: -5px;
        //   background: #3b82f6;
        //   width: 25px;
        //   height: 25px;
        //   border-radius: 50%;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   font-size: 12px;
        // }

        .number {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: #3b82f6;
          color: black;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        /* HERO */
        // .hero {
        //   height: 60vh;
        //   background: url("/photos/int_photo1.jpg") center/cover;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   position: relative;
        // }

        .hero {
          height: 60vh;
          background: url("/photos/int_photo1.jpg") center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
        }

        // .overlay {
        //   position: relative;
        //   text-align: center;
        //   color: white;
        // }

        .overlay {
          position: relative;
          text-align: center;
          color: white;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        /* HEADING */
        .overlay h1 {
          font-size: 32px;
          max-width: 900px;
        }

        /* SUBTEXT */
        .overlay p {
          font-size: 16px;
          color: #ccc;
          max-width: 600px;
        }

        /* BUTTON */
        .overlay button {
          margin-top: 10px;
        }

        // button {
        //   padding: 10px 20px;
        //   background: linear-gradient(90deg, #efd5ff, #515ada);
        //   border: none;
        //   cursor: pointer;
        // }

        button {
          padding: 12px 28px;
          background: #111;
          color: white;
          border: 1px solid #2a2a2a;
          cursor: pointer;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-radius: 8px;
          border: 1px solid #3b82f6;
        }

        /* Hover Effect */
        button:hover {
          border-color: #3b82f6;
          box-shadow: 0 0 15px #3b82f6;
          transform: translateY(-2px);
        }

        /* 🔥 FOOTER */
        /* FOOTER MAIN */
        .footer {
          background: #000;
          color: #ccc;
          padding: 60px 20px 20px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .logoBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .logoBox h2 {
          font-size: 20px;
          color: white;
        }

        /* LOGO */
        .logo {
          color: white;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .desc {
          line-height: 1.7;
        }

        /* HEADINGS */
        .footer-col h3 {
          color: white;
          margin-bottom: 20px;
          position: relative;
        }

        .footer-col h3::after {
          content: "";
          width: 40px;
          height: 2px;
          background: #3b82f6;
          display: block;
          margin-top: 8px;
        }

        /* TAG BUTTONS */
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tags :global(a) {
          border: 1px solid #444;
          padding: 6px 12px;
          font-size: 12px;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
          color: #ccc;
          display: inline-block;
        }

        .tags :global(a:hover) {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        /* SERVICES */
        .services {
          list-style: none;
          padding: 0;
        }

        .services li {
          padding: 10px 0;
          border-bottom: 1px solid #222;
          transition: 0.3s;
        }

        .services li:hover {
          color: #3b82f6;
        }

        /* SOCIAL DIAMOND */
        .socials {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .diamond {
          width: 45px;
          height: 45px;
          border: 1px solid #555;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
          cursor: pointer;
          transition: 0.3s;
        }

        .diamond svg {
          transform: rotate(-45deg);
        }

        .diamond:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: rotate(45deg) scale(1.1);
        }

        /* BOTTOM */
        .footer-bottom {
          border-top: 1px solid #222;
          margin-top: 40px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .steps {
            gap: 20px;
          }
          .overlay h1 {
            white-space: normal; /* mobile पर 2 line allow */
            font-size: 24px;
          }

          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .socials {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
