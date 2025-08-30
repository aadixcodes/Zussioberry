"use client";
import React from 'react'

const page = () => {

  const galleryImages = [
    'https://imgs.search.brave.com/995J3ORL4zStP-pgs9ImeOHa6N3Al9Bzg0Fd9fgooy8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZXBl/dGl0YnJ1bmNoZXJ5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9Db2Nv/bnV0LVNoYWtlX1Zl/cnRpY2FsLTMuanBn',
    'https://imgs.search.brave.com/yN9XSXlXz_iIo-f-HSwFWIXL2aNAQ1OxsPdWxCTQ2uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk2/Njc0MDgyL3Bob3Rv/L2Jvd2wtb2Ytc3Ry/YXdiZXJyeS1pY2Ut/Y3JlYW0uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTB3RlJy/TkVNTTV6VWtLSno2/d1Z5N0VnVktiQ1B4/aVQtbDEtX24zRkRV/UWs9',
    'https://imgs.search.brave.com/-C2a4SPuCHxodWzAY-ikW0vwDjZMyzGL61lF40s6dIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZXBl/dGl0YnJ1bmNoZXJ5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9Db2Nv/bnV0LVNoYWtlX0hv/cml6b250YWwtMS0x/MDI0eDY4My5qcGc',
    'https://imgs.search.brave.com/Vsw7p00JrH-RXCwG3mCQ3Ac1h2vDbnJ5qSFKo1i3txI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ1MjYy/OTAuanBn',
    'https://imgs.search.brave.com/WOAX3kDpACBxehY6dZuwfKjKeTFYqG36QELZDQax7jM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1oYW5k/LWhvbGRpbmctc2hh/a2UtZ2xhc3NfMjMt/MjE0ODYwMTM1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw',
    'https://imgs.search.brave.com/995J3ORL4zStP-pgs9ImeOHa6N3Al9Bzg0Fd9fgooy8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZXBl/dGl0YnJ1bmNoZXJ5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9Db2Nv/bnV0LVNoYWtlX1Zl/cnRpY2FsLTMuanBn',
    'https://imgs.search.brave.com/yN9XSXlXz_iIo-f-HSwFWIXL2aNAQ1OxsPdWxCTQ2uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk2/Njc0MDgyL3Bob3Rv/L2Jvd2wtb2Ytc3Ry/YXdiZXJyeS1pY2Ut/Y3JlYW0uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTB3RlJy/TkVNTTV6VWtLSno2/d1Z5N0VnVktiQ1B4/aVQtbDEtX24zRkRV/UWs9',
    'https://imgs.search.brave.com/-C2a4SPuCHxodWzAY-ikW0vwDjZMyzGL61lF40s6dIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZXBl/dGl0YnJ1bmNoZXJ5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9Db2Nv/bnV0LVNoYWtlX0hv/cml6b250YWwtMS0x/MDI0eDY4My5qcGc',
    'https://imgs.search.brave.com/Vsw7p00JrH-RXCwG3mCQ3Ac1h2vDbnJ5qSFKo1i3txI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ1MjYy/OTAuanBn',
    'https://imgs.search.brave.com/WOAX3kDpACBxehY6dZuwfKjKeTFYqG36QELZDQax7jM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1oYW5k/LWhvbGRpbmctc2hh/a2UtZ2xhc3NfMjMt/MjE0ODYwMTM1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw',
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
