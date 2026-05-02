"use client";

import {
  Briefcase,
  Home,
  Store,
  Building2,
  Hospital,
  BedDouble,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    { title: "Office Interior", icon: <Briefcase size={40} /> },
    { title: "House Interior", icon: <Home size={40} /> },
    { title: "Restaurant Interior", icon: <Store size={40} /> },
    { title: "Hospital Interior", icon: <Hospital size={40} /> },
    { title: "Appartment Interior", icon: <Building2 size={40} /> },
    { title: "Hospitality Interior", icon: <BedDouble size={40} /> },
    { title: "Villa Interior", icon: <Home size={40} /> },
    { title: "Commercial Interior", icon: <Building2 size={40} /> },
  ];

  return (
    <section
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        width: "100%",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      {/* Heading */}
      <div
        style={{
          marginBottom: "48px",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: 600, color: "white" }}>
          Our Services
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "24px",
            lineHeight: "1.6",
          }}
        >
          We are more than just an interior firm — delivering complete, end-to-end solutions with precision, innovation, and designs that stand the test of time.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "32px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {services.map((item, index) => (
          <div
  key={index}
  style={{
    // backgroundColor: "white",
    backgroundColor: "#0d0d0d",
    minHeight: "150px",
    padding: "24px",
    display: "flex",
    gap: "24px",
    borderRadius: "8px",
    alignItems: "flex-start",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(212, 164, 95, 0.8)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "none";
  }}
>
            {/* Icon */}
            <div style={{ color: "#d4a45f" }}>
              {item.icon}
            </div>

            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d4a45f",
                  marginTop: "8px",
                  fontSize: "14px",
                  cursor: "pointer",
                  borderBottom: "1px solid #d4a45f",
                  width: "fit-content",
                }}
              >
                Read More
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}