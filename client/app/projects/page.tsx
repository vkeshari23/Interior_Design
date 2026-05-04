"use client";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Products() {
  return (
    <section className={styles.projectsSection}>
      
      {/* TOP BANNER */}
      <div className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles.bannerText}>
          <h1>PROJECTS</h1>
          <p>The Work That Defines Us</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        <p className={styles.subtitle}>
          [ Checkout Our Latest Projects ]
        </p>

        <h2 className={styles.title}>
          Take a glimpse at our recent work that blends
          <br /> creativity with precision.
        </h2>

        {/* GRID */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/photos/project2.jpg" alt="project" fill />
          </div>

          <div className={styles.card}>
            <Image src="/photos/project3.jpg" alt="project" fill />
          </div>

          <div className={styles.card}>
            <Image src="/photos/project4.jpg" alt="project" fill />
          </div>

          <div className={styles.card}>
            <Image src="/photos/project5.jpg" alt="project" fill />
          </div>
          <div className={styles.card}>
            <Image src="/photos/project6.jpg" alt="project" fill />
          </div>
        <div className={styles.card}>
            <Image src="/photos/project7.jpg" alt="project" fill />
          </div>
        <div className={styles.card}>
            <Image src="/photos/project8.jpg" alt="project" fill />
          </div>
        <div className={styles.card}>
            <Image src="/photos/project9.jpg" alt="project" fill />
          </div>
          <div className={styles.card}>
            <Image src="/photos/project10.jpg" alt="project" fill />
          </div>
          <div className={styles.card}>
            <Image src="/photos/project11.jpg" alt="project" fill />
          </div>
        </div>
        
      </div>
    </section>
  );
}