"use client";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      
      {/* ===== HERO BANNER ===== */}
      <div className={styles.banner}>
        <div className={styles.overlay}></div>

        <div className={styles.bannerContent}>
          <h1>Contact Us</h1>
          <p>Home &nbsp;›&nbsp; Contact Us</p>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className={styles.container}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>Get In Touch</h2>
          <p className={styles.desc}>
            Do you have anything in your mind to let us know? Kindly don't delay
            to connect to us by means of our contact form.
          </p>

          <form className={styles.form}>
            <div className={styles.row}>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Message"></textarea>

            <button type="submit">SUBMIT NOW</button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h4>Address :</h4>
          <p>
            #13,2nd cross ,10th Main, Mathikere, Bengaluru - 560054
          </p>

          <h4>Phone :</h4>
          <p>+91 7259468707</p>

          <h4>Email :</h4>
          <p>info@anugrahahomeinteriors.in</p>

          <h4>Opening Hours :</h4>
          <p>10:00 AM - 21:00 PM</p>
          <p>Monday - Sunday</p>
        </div>

      </div>
    </section>
  );
}