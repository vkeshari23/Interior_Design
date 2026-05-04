"use client";
import { useEffect, useState } from "react";
// import styles from "./WhyChooseUs.module.css";
import styles from "./asc.module.css";

const Counter = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <h2 className={styles.number}>{count}+</h2>;
};

export default function Asc() {
  return (
    <section className={styles.wrapper}>
      {/* TOP SECTION */}
      <div className={styles.top}>
        {/* <div className={styles.image}></div> */}
        <div className={styles.image}>
  <img src="/photos/aboutUs3.png" alt="interior" />
</div>

        <div className={styles.content}>
          <h2>Why Choose Us for Interior Work</h2>
          <p>
            To give you a home that lasts, we bring you only the best in
            everything — quality raw materials, state-of-the-art manufacturing,
            rigorous quality checks, professional installations and transparent
            prices.
          </p>

          <div className={styles.features}>
            <div>Superior Quality</div>
            <div>Professional Team</div>
            <div>Unmatched Warranty</div>
          </div>

          <h4 className={styles.cta}>
            Get in touch with us to design your dream home
          </h4>
        </div>
      </div>

      {/* COUNTER SECTION */}
      <div className={styles.counterSection}>
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

      {/* BOTTOM SECTION */}
      <div className={styles.bottom}>
        {/* <div className={styles.bottomImg}></div> */}
        <div className={styles.bottomImg}>
  <img src="/photos/aboutUs4.png" alt="interior" />
</div>

        <div className={styles.bottomContent}>
          <h2>Our Company Mission</h2>
          <p>
            We believe that interior design is more than great functionality and
            beautiful aesthetics.
          </p>

          <ul>
            <li>Best Design Consultancy</li>
            <li>Architect Designer</li>
            <li>Turnkey Projects</li>
            <li>Residential Designs</li>
            <li>Corporate Designs</li>
            <li>Commercial Designs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}