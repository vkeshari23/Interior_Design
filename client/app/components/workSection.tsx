"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function WorkSection() {
  const steps = [
    { id: 1, title: "Meet Customers", icon: "🤝" },
    { id: 2, title: "Design Discussion", icon: "👥" },
    { id: 3, title: "Drafting Design", icon: "📐" },
    { id: 4, title: "Implementation", icon: "🏠" },
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
          <h1>Think interior. Think X Interiors.</h1>
          <p>
            Interiors for all tastes and budgets. Choose from thousands of designs.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>

      {/* 🔥 FOOTER SECTION (3 COLUMN) */}
      <footer className="footer">

        <div className="footer-container">

          {/* COLUMN 1 */}
          <div className="footer-col">
            <p>ANUGRAHA HOME</p>
            <p>#13, 2nd Cross, 10th Main, Mathikere, Bengaluru - 560054</p>
            <p>7259468707</p>
            <p>info@Anugrahahomeinterior.in</p>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <p>» Home</p>
            <p>» About Us</p>
            <p>» Service</p>
            <p>» Projects</p>
            <p>» Contact Us</p>
            
          </div>

          {/* COLUMN 3 */}
          <div className="socials">

  <a href="https://www.facebook.com" target="_blank" className="icon">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com" target="_blank" className="icon">
    <FaInstagram />
  </a>

  <a href="https://wa.me/919999999999" target="_blank" className="icon">
    <FaWhatsapp />
  </a>

  <a href="https://www.linkedin.com" target="_blank" className="icon">
    <FaLinkedinIn />
  </a>

  <a href="https://twitter.com" target="_blank" className="icon">
    <FaTwitter />
  </a>

</div>

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

        .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: white;
          transition: 0.3s;
          border: 1px solid #2a2a2a;
        }

        .circle:hover {
          box-shadow: 0 0 25px gold;
          transform: scale(1.1);
        }

        .number {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: #cfa35a;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* HERO */
        .hero {
          height: 60vh;
          background: url("/photos/int_photo1.jpg") center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        .overlay {
          position: relative;
          text-align: center;
          color: white;
        }

        button {
          padding: 10px 20px;
          background: linear-gradient(90deg,#efd5ff,#515ada);
          border: none;
          cursor: pointer;
        }

        /* 🔥 FOOTER */
        .footer {
          background: #0a0a0a;
          color: #ccc;
          padding: 50px 20px;
          border-top: 1px solid #222;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: auto;
        }

        .footer-col {
          flex: 1;
          min-width: 200px;
        }

        .footer-col h3 {
          color: white;
          margin-bottom: 15px;
        }

        .footer-col p {
          margin: 8px 0;
          cursor: pointer;
        }

        .footer-col p:hover {
          color: gold;
        }

        .socials {
          display: flex;
          gap: 15px;
          font-size: 22px;
        }

        .socials span:hover {
          color: gold;
          transform: scale(1.2);
          transition: 0.3s;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .steps {
            gap: 20px;
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