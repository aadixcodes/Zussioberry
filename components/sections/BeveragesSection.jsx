"use client";
import Image from "next/image";
import React from 'react'

const BeveragesSection = () => {
  const beverages = [
    { name: "Milkshake", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-1.jpg" },
    { name: "Frappe", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-2.jpg" },
    { name: "Boba Drinks", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-3.jpg" },
    { name: "Mojito", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-4.jpg" },
    { name: "Slushy", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-5.jpg" },
    { name: "Hot Chocolate", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-6.jpg" },
    { name: "Smoothie", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-7.jpg" },
    { name: "Coffee", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-8.jpg" },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Left Side Decorative Image */}
      <div className="hidden md:block absolute left-0 top-8 -z-10">
        <Image
          src="/assets/SectionLeftImg.png"
          alt="Orange Slice"
          width={180}
          height={180}
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div>
          <p className="font-[para] text-xl text-[#23aa5d]">Best For You</p>
          <h2 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1] mt-2">Our Beverage</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {beverages.map((bev, index) => (
            <div key={index} className="space-y-2 group">
              <div className="relative w-full h-[350px]">
                <Image
                  src={bev.img}
                  alt={bev.name}
                  fill
                  className="object-cover rounded-xl shadow-sm transition-transform duration-500 group-hover:rotate-8"
                />
              </div>
              <h3 className="text-lg mt-6 font-semibold font-[para]">{bev.name}</h3>
              <p className="text-gray-500 text-sm font-[para]">{bev.products} products</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-transparent cursor-pointer border border-[#23aa5d] text-[#23aa5d] px-5 py-2 rounded-full flex items-center gap-3 shadow-md hover:bg-[#23aa5d] hover:text-white transition font-[para]">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#23aa5d] text-white mr-1">
              {/* Icon: Shopping Cart (Heroicons outline) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
              </svg>
            </span>
            <span className="font-semibold">View all Products</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeveragesSection;