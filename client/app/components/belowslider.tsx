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
    <section className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1200px]">
        
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-[#d4a45f] leading-snug tracking-wide mb-10 md:mb-14 text-left">
          Awesome place & what improves <br className="hidden sm:block" />
          explore radiance.
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg 
              min-h-[360px] sm:min-h-[380px] md:min-h-[400px] ❌
              hover:scale-[1.03] 
              hover:shadow-[0_10px_40px_rgba(212,164,95,0.25)] 
              transition-all duration-500 flex flex-col"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-[170px] sm:h-[180px] md:h-[190px] object-cover ❌ transition duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-6 flex flex-col flex-1 ❌">
                
                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide mb-2 ❌">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-2 text-sm leading-relaxed ❌">
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