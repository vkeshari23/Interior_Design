"use client";

import { useRef, useState } from "react";

export default function AboutSection() {
//   const videoRef = useRef(null);
const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="wrapper">
      <div className="container">

        {/* LEFT CARD */}
        <div className="left">
          <h2>About Anugraha Home Interiors</h2>

          <p>
            We create premium modern interiors with perfect balance of luxury
            and comfort. Our designs are elegant, functional, and timeless.
          </p>

          <ul>
            <li>Whole Home Interior</li>
            <li>Modular Kitchen and Wardrobe</li>
            <li>Carpenter, Decor and more</li>
            <li>On Site Expertise</li>
          </ul>

          <p className="cta">
            Design your home, right here
            <br />
            <span>Talk to a designer</span>
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="right">
          <video
            ref={videoRef}
            src="/videos/background2.mp4"   // 👈 put video in public folder
            className="video"
          />

          {/* PLAY / PAUSE BUTTON */}
          <div className="play" onClick={handlePlayPause}>
            {isPlaying ? "❚❚" : "▶"}
          </div>
        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
  .wrapper {
    background: #1f2529;
    padding: 100px 0;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    display: flex;
    transition: 0.4s ease;
  }

  .container:hover {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); /* 🔵 blue shadow */
  }

  /* LEFT */
  .left {
    width: 50%;
    background: #121212;
    padding: 60px;
    color: white;
  }

  .left h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: white;
  }

  .left p {
    color: #ccc;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }

  ul li {
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    color: white;
  }

  ul li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #3b82f6; /* 🔵 blue tick */
  }

  .cta span {
    color: #3b82f6; /* 🔵 blue text */
    text-decoration: underline;
    cursor: pointer;
  }

  /* RIGHT VIDEO */
  .right {
    width: 50%;
    position: relative;
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* BUTTON */
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #3b82f6; /* 🔵 blue button */
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.7); /* 🔵 glow */
    transition: 0.3s;
  }

  .play:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 30px rgba(59, 130, 246, 1);
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .left,
    .right {
      width: 100%;
    }

    .right {
      height: 250px;
    }
  }
`}</style>
    </section>
  );
}