"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const fullText =
    "Beautiful homes made with care, quality, and your vision in mind";

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      
      {/* Background Video */}
      <video
        src="/videos/headerBackground_vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      />

      {/* Overlay */}
      <div className="hero-overlay">
        
        <div className="hero-content">
          
          {/* Heading */}
          <h1 className="hero-heading">
            Built for Living. Designed for You
          </h1>

          {/* Typing Text */}
          <p className="hero-text">
            {text}
            <span className="cursor">|</span>
          </p>

        </div>

      </div>

      {/* CSS (Single File) */}
      <style>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
        }

        .hero-content {
          display: inline-block;
          text-align: left;
          max-width: 100%;
        }

        .hero-heading {
          color: white;
          font-weight: bold;
          margin-bottom: 12px;
          letter-spacing: 1px;
          line-height: 1.2;
          animation: fadeUp 1.2s ease forwards;

          font-size: 24px;
        }

        @media (min-width: 640px) {
          .hero-heading {
            font-size: 32px;
          }
        }

        @media (min-width: 768px) {
          .hero-heading {
            font-size: 48px;
          }
        }

        @media (min-width: 1024px) {
          .hero-heading {
            font-size: 64px;
          }
        }

        .hero-text {
          color: #93c5fd;
          border-left: 2px solid #3b82f6;
          padding-left: 10px;
          font-weight: 300;
          letter-spacing: 1px;

          white-space: normal;
          overflow: hidden;
          font-size: 12px;
        }

        @media (min-width: 640px) {
          .hero-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
          }
        }

        @media (min-width: 768px) {
          .hero-text {
            font-size: 18px;
          }
        }

        /* Cursor */
        .cursor {
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}