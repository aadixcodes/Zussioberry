"use client";
import React from 'react'

const page = () => {

  const galleryImages = [
    '/assets/Gallery/Image1.jpg',
    '/assets/Gallery/Image2.jpg',
    '/assets/Gallery/Image3.jpg',
    '/assets/Gallery/Image4.jpg',
    '/assets/Gallery/Image5.jpg',
    '/assets/Gallery/Image6.jpg',
    '/assets/Gallery/Image7.jpg',
    '/assets/Gallery/Image8.jpg',
    '/assets/Gallery/Image9.jpg',
    '/assets/Gallery/Image10.jpg',
    '/assets/Gallery/Image11.jpg',
    '/assets/Gallery/Image12.jpg',
    '/assets/Gallery/Image13.jpg',
    '/assets/Gallery/Image14.jpg',
    '/assets/Gallery/Image15.jpg',
    '/assets/Gallery/Image16.jpg',
    '/assets/Gallery/Image17.jpg',
    '/assets/Gallery/Image18.jpg',
    '/assets/Gallery/Image19.jpg',
    '/assets/Gallery/Image20.jpg',  
    '/assets/Gallery/Image21.jpg',
    '/assets/Gallery/Image22.jpg',
    '/assets/Gallery/Image23.jpg',
    '/assets/Gallery/Image24.jpg',
    '/assets/Gallery/Image25.jpg',
    '/assets/Gallery/Image26.jpg',
    '/assets/Gallery/Image27.jpg',
    '/assets/Gallery/Image28.jpg',
    '/assets/Gallery/Image29.jpg',
    '/assets/Gallery/Image30.jpg',
    '/assets/Gallery/Image31.jpg',
    '/assets/Gallery/Image32.jpg',
    // '/assets/Gallery/Image34.jpg',
    // '/assets/Gallery/Image33.jpg',
  ];

  return (
    <div>

    <section
      className="relative bg-cover bg-center text-white min-h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/careerBanner.png')"}}>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight sm:leading-tight md:leading-[1.1]">
          Gallery
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mb-6 font-[para] leading-relaxed">
          Discover the beauty of Zussioberry - a visual taste of our products , moments
          and inspiration.
        </p>
        {/* <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
            Join Now
        </button>

        <div className="mt-8 flex flex-wrap justify-center gap-20">
          {stats.map((stat, i) => {
            const isGreen = i % 2 === 0;
            return (
              <div
                key={i}
                className={`text-center shadow-md transition ${
                  isGreen
                    ? "text-[#23aa5d]"
                    : "text-white"
                }`}
              >
                <h3
                  className={`text-4xl font-bold ${
                    isGreen ? "text-white" : "text-[#23aa5d]"
                  }`}
                >
                  {stat.value}
                </h3>
                <p
                  className={`text-xl font-bold font-[para] ${
                    isGreen ? "text-white" : "text-[#23aa5d]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>

    <section>
      <div
        className="max-w-6xl mx-auto mt-20 mb-20 px-4 sm:px-0"
        style={{
          columnCount: 1,
          columnGap: '1.5rem',
        }}
      >
        <style jsx>{`
          @media (min-width: 640px) {
            div[data-masonry] {
              column-count: 2 !important;
            }
          }
          @media (min-width: 768px) {
            div[data-masonry] {
              column-count: 3 !important;
            }
          }
        `}</style>
        <div data-masonry>
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ display: 'block', width: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default page
