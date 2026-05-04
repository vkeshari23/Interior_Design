"use client";

import Image from "next/image";
import "./about.css";
import Asc from "./aboutSecondSection.tsx/asc";

export default function AboutPage() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>
              Home <span>›</span> About Us
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 ABOUT SECTION */}
      <section className="about">
        <div className="container">
          {/* LEFT CONTENT */}
          <div className="about-text">
            <h2>Our Story In Interior Industry India</h2>

            <p className="highlight">
              We provide a variety of interior design, refurbishing, and modular
              options for your home. We provide the most exquisite and original
              design options for you, including colors, lighting, and furniture.
            </p>

            <p>
              Welcome to S A Interiors Designs, where the artistry of both
              contemporary and modern luxury designs is highlighted. S A
              Interiors Design is committed to covering all aspects of interior
              design and carpentry, specializing in creating bespoke experiences
              that flawlessly mix contemporary and modern luxury aesthetics.
            </p>

            <p>
              Our objective is to establish ourselves as a prominent
              international design atelier by creating projects with a really
              unique and one-of-a-kind style.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <div className="image-box">
              <Image
                src="/photos/aboutUs2.png" // 👈 apni image yaha daalo
                alt="interior"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <Asc/>
    </>
  );
}