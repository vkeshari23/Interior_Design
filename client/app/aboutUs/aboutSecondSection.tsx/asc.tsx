"use client";
import { useEffect, useState } from "react";

const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationTimer: any;
    let resetTimer: any;

    const startAnimation = () => {
      let start = 0;
      const increment = target / (duration / 16);

      animationTimer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(animationTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    startAnimation();

    resetTimer = setInterval(() => {
      setCount(0);
      startAnimation();
    }, 5000);

    return () => {
      clearInterval(animationTimer);
      clearInterval(resetTimer);
    };
  }, [target, duration]);

  return <h2 className="number">{count}+</h2>;
};

export default function Asc() {
  return (
    <section className="wrapper">

      <div className="card">
        <div className="cardImage">
          <img src="/photos/aboutUs3.png" alt="interior" />
        </div>
        <div className="cardContent">
          <h2>Why Choose Us for Interior Work</h2>
          <p>
            To give you a home that lasts, we bring you only the best in everything — quality raw materials, state-of-the-art manufacturing, rigorous quality checks.
          </p>
          <div className="features">
            <div>Superior Quality</div>
            <div>Professional Team</div>
            <div>Warranty</div>
          </div>
          <h4 className="cta">Get in touch with us to design your dream home</h4>
        </div>
      </div>

      <div className="counterSection">
        <div>
          <Counter target={30} />
          <p>Material Warranty</p>
        </div>
        <div>
          <Counter target={2500} />
          <p>Homes Completed</p>
        </div>
        <div>
          <Counter target={200} />
          <p>Interior Designer</p>
        </div>
        <div>
          <Counter target={45} />
          <p>Project Delivery</p>
        </div>
      </div>

      <div className="card">
        <div className="cardImage">
          <img src="/photos/aboutUs4.png" alt="interior" />
        </div>
        <div className="cardContent">
          <h2>Our Company Mission</h2>
          <p>
            We believe that interior design is more than great functionality and beautiful aesthetics.
          </p>
          <ul className="list">
            <li>Best Design Consultancy</li>
            <li>Architect Designer</li>
            <li>Turnkey Projects</li>
            <li>Residential Designs</li>
            <li>Corporate Designs</li>
            <li>Commercial Designs</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          background: #000;
          color: #fff;
          font-family: sans-serif;
          padding: 40px;
        }

        .card {
          width: 100%;
          max-width: 1200px;
          height: 400px;
          display: flex;
          margin: 30px auto;
          background: #0d1117;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .cardImage {
          width: 50%;
          height: 100%;
        }

        .cardImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cardContent {
          width: 50%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cardContent h2 {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .cardContent p {
          font-size: 14px;
          color: #aaa;
          margin-bottom: 15px;
        }

        .features {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .features div {
          border: 1px solid #1f6feb;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #1f6feb;
        }

        .cta {
          color: #1f6feb;
          font-size: 14px;
        }

        .counterSection {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 40px 20px;
          background: #02040a;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .counterSection > div {
          padding: 10px 20px;
        }

        .number {
          font-size: 42px;
          font-weight: 700;
          position: relative;
        }

        .number::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(31,111,235,0.4), transparent);
          filter: blur(20px);
          z-index: -1;
        }

        .counterSection p {
          font-size: 13px;
          color: #bbb;
          margin-top: 6px;
        }

        .list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          color: #1f6feb;
        }

        .list li {
          list-style: none;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .card {
            flex-direction: column;
            height: auto;
          }

          .cardImage,
          .cardContent {
            width: 100%;
          }

          .cardImage img {
            height: 250px;
          }

          .counterSection {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

    </section>
  );
}