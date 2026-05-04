import styles from './sp.module.css';

const services = [
  { title: "Wardrobe", img: "/wardrobe.jpg" },
  { title: "Study Tables", img: "/study-table.jpg" },
  { title: "Electrical", img: "/electrical.jpg" },
  { title: "Plumbing", img: "/plumbing.jpg" },
  { title: "False Ceiling", img: "/false-ceiling.jpg" },
  { title: "Painting", img: "/painting.jpg" },
  { title: "Deep Cleaning", img: "/cleaning.jpg" },
  { title: "Design Services", img: "/design.jpg" },
  { title: "Modular Kitchen", img: "/kitchen.jpg" },
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>Services</h1>
          <p>Home &gt; <span>Services 1</span></p>
        </div>
      </header>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.headerArea}>
          <h2>We Provide Different Services In Interior Field</h2>
          <p>
            Survival strategies to ensure proactive domination. At the end of the day, going forward, 
            a new normal that has evolved from generation X is on the runway heading towards a 
            streamlined cloud solution.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                 {/* Replace with <Image /> from next/image for production */}
                <img src={service.img} alt={service.title} />
              </div>
              <div className={styles.cardTitle}>
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className={styles.whatsapp}>
        <span>WhatsApp Us</span>
      </div>
    </div>
  );
}