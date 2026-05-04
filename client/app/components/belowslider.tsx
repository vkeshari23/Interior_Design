"use client";

import Image from "next/image";

export default function InteriorSection() {
  const data = [
    {
      title: "Residential Interiors",
      desc: "The most inspiring residential architecture, interior design, landscaping, urbanism, and more from the world's best architects.",
      img: "/photos/cart1.jpg",
    },
    {
      title: "Office Designs",
      desc: "The cost of office interior design varies based on size, materials, and the location of the project.",
      img: "/photos/cart2.jpg",
    },
    {
      title: "Commercial Interiors",
      desc: "A trusted commercial interior designer in Bangalore, we take ordinary spaces and flip them into vibrant hubs where ideas flow and creativity sparks.",
      img: "/photos/cart3.jpg",
    },
  ];

  return (
    <section className="w-full bg-black text-white flex justify-center px-4 sm:px-6 md:px-10 py-12 md:py-16">
      
      <div className="w-full max-w-[1200px]">
        
        {/* HEADING */}
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white leading-snug tracking-wide mb-8 sm:mb-10 md:mb-14 text-left">
          Awesome place & what improves <br className="hidden sm:block" />
          explore radiance.
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-md 
              transition-all duration-300
              hover:scale-[1.02] hover:-translate-y-1
              hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)] 
              flex flex-col"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-[160px] sm:h-[170px] md:h-[180px] object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 flex flex-col flex-1">
                
                <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}