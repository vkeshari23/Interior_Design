"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const data = [
    {
      name: "Rahul Sharma",
      text: "Amazing interior work done",
      img: "/photos/user1.jpg",
    },
    {
      name: "Priya Singh",
      text: "Loved the modular kitchen",
      img: "/photos/user2.jpg",
    },
    {
      name: "Amit Verma",
      text: "Very professional service",
      img: "/photos/user3.jpg",
    },
    {
      name: "Sneha Kapoor",
      text: "Beautiful home design",
      img: "/photos/user4.jpg",
    },
    {
      name: "Karan Mehta",
      text: "Highly recommended",
      img: "/photos/user5.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial">
      <h2>What our customers says</h2>

      <div className="slider">
        {data.map((item, i) => {
          const position =
            (i - index + data.length) % data.length; // circular logic

          let className = "card";

          if (position === 0) className += " active"; // center
          else if (position === 1) className += " right";
          else if (position === data.length - 1) className += " left";
          else className += " hidden";

          return (
            <div className={className} key={i}>
              <Image
                src={item.img}
                alt="user"
                width={60}
                height={60}
                className="avatar"
              />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* CSS */}
      <style jsx>{`
  .testimonial {
    background: black;
    min-height: 100vh;   /* ✅ full height */
    width: 100%;         /* ❗ avoid 100vw issue */
    padding: 80px 20px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    margin-bottom: 60px;
    font-size: 28px;
  }

  .slider {
    position: relative;
    height: 320px; /* 🔥 increased */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    position: absolute;
    width: 280px;   /* 🔥 bigger */
    padding: 30px;  /* 🔥 more spacing */
    background: #111;
    border-radius: 12px;
    text-align: center;
    transition: all 0.5s ease;
    opacity: 0;
    transform: scale(0.8);
  }

  .avatar {
    border-radius: 50%;
    margin-bottom: 15px;
    width: 70px;
    height: 70px;
  }

  .card.active {
    transform: scale(1.3) translateX(-50px); /* 🔥 bigger + shift */
    opacity: 1;
    z-index: 3;
    box-shadow: 0 20px 60px rgba(59,130,246,0.6);
  }

  .card.left {
    transform: translateX(-260px) scale(1);
    opacity: 0.7;
    z-index: 2;
  }

  .card.right {
    transform: translateX(260px) scale(1);
    opacity: 0.7;
    z-index: 2;
  }

  .card.hidden {
    opacity: 0;
    pointer-events: none;
  }

  h3 {
    font-size: 16px;
    margin-top: 10px;
  }

  p {
    font-size: 13px;
    color: #aaa;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    .slider {
      height: 260px;
    }

    .card {
      width: 220px;
      padding: 20px;
    }

    .card.active {
      transform: scale(1.15);
    }

    .card.left,
    .card.right {
      display: none;
    }
  }
`}</style>
    </section>
  );
}