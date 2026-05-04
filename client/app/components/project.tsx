"use client";

import Image from "next/image";
import { Search, Link } from "lucide-react";

export default function Projects() {
  const images = [
    { img: "/photos/cart1.jpg", title: "Modular Kitchen" },
    { img: "/photos/cart2.jpg", title: "Modern Bedroom" },
    { img: "/photos/cart3.jpg", title: "Luxury Living Room" },
    { img: "/photos/project2.jpg", title: "Office Interior" },
    { img: "/photos/project4.jpg", title: "Sofa Design" },
    { img: "/photos/project5.jpg", title: "Workspace Setup" },
    { img: "/photos/project7.jpg", title: "Study Room" },
    { img: "/photos/project10.jpg", title: "Hall Interior" },
  ];

  return (
    <section className="projects">
      <h2>Our Latest Projects</h2>

      {/* GRID */}
      <div className="grid">
        {images.map((item, index) => (
          <div className={`item item${index + 1}`} key={index}>
            
            {/* IMAGE */}
            <Image src={item.img} alt="project" fill className="img" />

            {/* 🔥 OVERLAY */}
            <div className="overlay">
              <h3>{item.title}</h3>

              <div className="icons">
                <Search size={18} />
                <Link size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="view">View All Projects</p>

      {/* 🔥 CSS */}
      <style jsx>{`
        .projects {
          background: #1f2529;
          padding: 60px 20px;
          text-align: center;
          color: white;
        }

        h2 {
          color: #3b82f6;
          margin-bottom: 20px;
          font-size: 28px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 15px;
        }

        .item {
          position: relative;
          overflow: hidden;
        }

        .img {
          object-fit: cover;
          transition: 0.4s;
        }

        .item:hover .img {
          transform: scale(1.1);
        }

        /* 🔥 OVERLAY */
        .overlay {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 0.4s ease;
        }

        .item:hover .overlay {
          top: 0;
        }

        .overlay h3 {
          margin-bottom: 10px;
          font-size: 16px;
          color: white;
        }

        .icons {
          display: flex;
          gap: 12px;
        }

        .icons svg {
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .icons svg:hover {
          color: #3b82f6;
          transform: scale(1.2);
        }

        /* 🔥 SAME GRID LAYOUT */
        .item1 {
          grid-column: span 2;
          grid-row: span 2;
        }

        .item2 {
          grid-row: span 2;
        }

        .item5 {
          grid-column: span 2;
        }

        .item6 {
          grid-row: span 2;
        }

        .item8 {
          grid-row: span 2;
        }

        .view {
          margin-top: 30px;
          color: #3b82f6;
          cursor: pointer;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 150px;
          }

          .item1,
          .item2,
          .item5,
          .item6,
          .item8 {
            grid-column: span 2;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
}