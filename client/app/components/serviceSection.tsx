"use client";

import {
  Package,
  Table,
  Zap,
  Wrench,
  Layers,
  Paintbrush,
  Sparkles,
  PencilRuler,
  ChefHat,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
  { title: "Wardrobe", icon: <Package size={40} /> },
  { title: "Study Tables", icon: <Table size={40} /> },
  { title: "Electrical", icon: <Zap size={40} /> },
  { title: "Plumbing", icon: <Wrench size={40} /> },
  { title: "False Ceiling", icon: <Layers size={40} /> },
  { title: "Painting", icon: <Paintbrush size={40} /> },
  { title: "Deep Cleaning", icon: <Sparkles size={40} /> },
  { title: "Design Services", icon: <PencilRuler size={40} /> },
  { title: "Modular Kitchen", icon: <ChefHat size={40} /> },
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
                "0 0 20px rgba(59, 130, 246, 0.8)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Icon */}
            <div style={{ color: "#3b82f6" }}>
              {item.icon}
            </div>

            {/* Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
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
                  color: "#3b82f6",
                  marginTop: "8px",
                  fontSize: "14px",
                  cursor: "pointer",
                  borderBottom: "1px solid #3b82f6",
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